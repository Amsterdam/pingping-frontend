!groovy
def tag_image_as(tag) {
  script {
    docker.image("${DOCKER_IMAGE_URL}:${env.COMMIT_HASH}").push(tag)
    sh "docker rmi ${DOCKER_IMAGE_URL}:${tag} || true"
  }
}
def deploy(environment) {
  build job: 'Subtask_Openstack_Playbook',
    parameters: [
        [$class: 'StringParameterValue', name: 'INVENTORY', value: environment],
        [$class: 'StringParameterValue', name: 'PLAYBOOK', value: 'deploy.yml'],
        [$class: 'StringParameterValue', name: 'PLAYBOOKPARAMS', value: "-e cmdb_id=app_${env.APP}"],
    ]
}
pipeline {
  agent any
  environment {
    APP = "pingping"
    DOCKER_IMAGE = "cto/${APP}"
    DOCKER_IMAGE_URL = "${DOCKER_REGISTRY_NO_PROTOCOL}/${DOCKER_IMAGE}"
  }
  stages {
    stage("Checkout") {
      steps {
        checkout scm
        script { env.COMMIT_HASH = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim() }
      }
    }
    // We've temporarily disabled testing from within the pipeline until we solve container discoverability
    // stage("Test") {
    //   steps {
    //     sh 'cp .env.example .env'
    //     sh 'docker-compose run -e JENKINS=1 --rm app bash test.sh'
    //   }
    // }
    stage("Build docker image") {
      when {
        not { buildingTag() }
      }
      steps {
        script {
          def image = docker.build("${DOCKER_IMAGE_URL}:${env.COMMIT_HASH}")
          image.push()
          tag_image_as("latest")
        }
      }
    }
    stage("Push and deploy acceptance image") {
      when {
        not { buildingTag() }
        anyOf { branch "dev" }
      }
      steps {
        tag_image_as("acceptance")
        deploy("acceptance")
      }
    }
    stage("Push and deploy production image") {
      when {
        not { buildingTag() }
        anyOf { branch "main" }
      }
      steps {
        script { docker.image("${DOCKER_IMAGE_URL}:${env.COMMIT_HASH}").pull() }
        tag_image_as("production")
        tag_image_as(env.TAG_NAME)
        deploy("production")
      }
    }
  }
  post {
    always {
      script { sh "docker rmi ${DOCKER_IMAGE_URL}:${env.COMMIT_HASH} || true" }
      // sh "docker-compose down -v"
    }
  }
}
