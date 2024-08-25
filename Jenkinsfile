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
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
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
            deleteDir()  // Optional: Clean up workspace after the build
        }

        success {
            echo 'Build and tests succeeded!'
        }

        failure {
            echo 'Build or tests failed.'
        }
    }
}
