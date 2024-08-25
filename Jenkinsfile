pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Project') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Build Image') {
            steps {
                bat 'docker build -t jenkins-node-hello-world .'
            }
        }

        stage('Build Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME')]) {
                        bat 'docker login -u DOCKERHUB_USERNAME -p DOCKERHUB_PASSWORD'
                        bat 'docker tag jenkins-node-hello-world:latest shiran600/jenkins-node-hello-world:latest'
                        bat 'docker push shiran600/jenkins-node-hello-world:latest'
                        bat 'docker logout'
                    }
            }
        }

        stage('Complete Pipeline') {
            steps {
                echo 'Pipeline execution completed successfully!'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir()
        }

        success {
            echo 'Build and tests succeeded!'
        }

        failure {
            echo 'Build or tests failed.'
        }
    }
}
