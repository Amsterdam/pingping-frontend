#!groovy

def tryStep(String message, Closure block, Closure tearDown = null) {
    try {
        block();
    }
    catch (Throwable t) {
        slackSend message: "${env.JOB_NAME}: ${message} failure ${env.BUILD_URL}", channel: '#ci-channel', color: 'danger'

        throw t;
    }
    finally {
        if (tearDown) {
            tearDown();
        }
    }
}


node {
    stage("Checkout") {
        checkout scm
    }

//    stage("Test") {
//        tryStep "test", {
//            sh "docker-compose -p pingping_frontend -f docker-compose.yml build && " +
//                    "docker-compose -p pingping_frontend -f docker-compose.yml run --rm test"
//       }
//    }


    stage("Build image") {
        tryStep "build", {
             sh "docker build -t build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-acc " +
                "--shm-size 1G " +
                "--build-arg ENVIRONMENT=acceptance " +
                "."
             sh "docker push build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-acc"
                // def image = docker.build("build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}". "--build-arg ENVIRONMENT=acceptance .")
                // image.push()
        }
    }
}

String BRANCH = "${env.BRANCH_NAME}"

if (BRANCH != "master") {
    stage('Waiting for approval') {
        input "Deploy to Acceptance?"
    }

    node {
        stage('Push acceptance image') {
            tryStep "image tagging", {
                    def image = docker.image("build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-acc")
                    image.pull()
                    image.push("acceptance")
            }
        }
    }

    node {
        stage("Deploy to Acceptance") {
            tryStep "deployment", {
                build job: 'Subtask_Openstack_Playbook',
                parameters: [
                    [$class: 'StringParameterValue', name: 'INVENTORY', value: 'acceptance'],
                    [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy-pingping-frontend.yml'],
                ]
            }
        }
    }
}

if (BRANCH == "master") {
    node {
        stage('Push acceptance image') {
            tryStep "image tagging", {
                    def image = docker.image("build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-acc")
                    image.pull()
                    image.push("acceptance")
            }
        }
    }

    node {
        stage("Deploy to ACC") {
            tryStep "deployment", {
                build job: 'Subtask_Openstack_Playbook',
                parameters: [
                    [$class: 'StringParameterValue', name: 'INVENTORY', value: 'acceptance'],
                    [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy-pingping-frontend.yml'],
                ]
            }
        }
    }


    stage('Waiting for approval') {
        slackSend channel: '#ci-channel', color: 'warning', message: 'pingping_frontend is waiting for Production Release - please confirm'
        input "Deploy to Production?"
    }

    node {
        stage("Build production image") {
            tryStep "build", {
                sh "docker build -t build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-prod " +
                    "--shm-size 1G " +
                    "--build-arg ENVIRONMENT=production " +
                    "."
                sh "docker push build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-prod"
            }
        }
        stage('Push production image') {
            tryStep "image tagging", {
                def image = docker.image("build.app.amsterdam.nl:5000/cto/pingping_frontend:${env.BUILD_NUMBER}-prod")
                image.pull()
                    image.push("production")
                    image.push("latest")
            }
        }
    }

    node {
        stage("Deploy") {
            tryStep "deployment", {
                build job: 'Subtask_Openstack_Playbook',
                parameters: [
                    [$class: 'StringParameterValue', name: 'INVENTORY', value: 'production'],
                    [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy-pingping-frontend.yml'],
                ]
            }
        }
    }
}