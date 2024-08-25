pipeline {
    agent any
    stages {
        stage('git checkout scm') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                sh 'sudo npm install'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('End Pipline') {
            steps {
                echo 'complete!!!'
            }
        }
    }
}