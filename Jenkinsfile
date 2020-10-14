#!groovy

String PROJECTNAME = "pingping"
String CONTAINERNAME = "cto/pingping_frontend:${env.BUILD_NUMBER}"
String DOCKERFILE = "Dockerfile"
String CONTAINERDIR = "."
String DOCKERBUILDPARAMS="--shm-size 1G"
String BRANCH = "${env.BRANCH_NAME}"

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

// Run all stages on a single node, as there are dependencies (tagged images) between stages
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
            docker.withRegistry("${DOCKER_REGISTRY_HOST}",'docker_registry_auth') {
                image = docker.build("${CONTAINERNAME}-acc","-f ${DOCKERFILE} ${DOCKERBUILDPARAMS} --build-arg ENVIRONMENT=acceptance ${CONTAINERDIR}")
                image.push()
            }
        }
    }

if (BRANCH != "master") {
    stage('Waiting for approval') {
        input "Deploy to Acceptance?"
    }

    stage('Push acceptance image') {
        tryStep "image tagging", {
            docker.withRegistry("${DOCKER_REGISTRY_HOST}",'docker_registry_auth') {
                image.push("acceptance")
            }
        }
    }

    stage("Deploy to Acceptance") {
        tryStep "deployment", {
            build job: 'Subtask_Openstack_Playbook',
            parameters: [
                [$class: 'StringParameterValue', name: 'INVENTORY', value: 'acceptance'],
                [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy.yml'],
                [$class: 'StringParameterValue', name: 'PLAYBOOKPARAMS', value: "-e cmdb_id=app_${PROJECTNAME}"],
            ]
        }
    }
}

if (BRANCH == "master") {
    stage('Push acceptance image') {
        tryStep "image tagging", {
            docker.withRegistry("${DOCKER_REGISTRY_HOST}",'docker_registry_auth') {
                image.push("acceptance")
            }
        }
    }

    stage("Deploy to ACC") {
        tryStep "deployment", {
            build job: 'Subtask_Openstack_Playbook',
            parameters: [
                [$class: 'StringParameterValue', name: 'INVENTORY', value: 'acceptance'],
                [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy.yml'],
                [$class: 'StringParameterValue', name: 'PLAYBOOKPARAMS', value: "-e cmdb_id=app_${PROJECTNAME}"],
            ]
        }
    }

    stage('Waiting for approval') {
        slackSend channel: '#ci-channel', color: 'warning', message: 'pingping_frontend is waiting for Production Release - please confirm'
        input "Deploy to Production?"
    }

    stage("Build production image") {
        tryStep "build", {
            docker.withRegistry("${DOCKER_REGISTRY_HOST}",'docker_registry_auth') {
                image = docker.build("${CONTAINERNAME}-prod","-f ${DOCKERFILE} ${DOCKERBUILDPARAMS} --build-arg ENVIRONMENT=production ${CONTAINERDIR}")
                image.push()
            }
        }
    }
    stage('Push production image') {
        tryStep "image tagging", {
            docker.withRegistry("${DOCKER_REGISTRY_HOST}",'docker_registry_auth') {
                image.push("production")
                image.push("latest")
            }
        }
    }
    stage("Deploy") {
        tryStep "deployment", {
            build job: 'Subtask_Openstack_Playbook',
            parameters: [
                [$class: 'StringParameterValue', name: 'INVENTORY', value: 'production'],
                [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy.yml'],
                [$class: 'StringParameterValue', name: 'PLAYBOOKPARAMS', value: "-e cmdb_id=app_${PROJECTNAME}"],
            ]
        }
    }
}

}
