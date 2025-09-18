pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Dhiraj-Kumar/React-CICD.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build Application') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Running Test Cases') {
            steps {
                bat 'npm run test'
            }
        }

        stage('Build & Deploy Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
                    bat """
                    echo Building Docker Image
                    docker build . -t dhiraj2001/react-cicd .

                    echo logging into Docker Hub
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

                    echo Pushing Docker image
                    docker push dhiraj2001/react-cicd

                    echo Logging out...
                    docker logout
                    """
                }
            }
        }
    }
}