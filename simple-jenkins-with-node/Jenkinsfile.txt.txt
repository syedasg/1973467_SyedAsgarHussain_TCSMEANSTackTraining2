pipeline {
	agent any
	tools {nodejs "MyNode"}		
	stages {
		stage("Check Node Version"){
			steps {
			sh "node --version"
			}
		}
		stage("install dependencies"){
			steps {
			sh "npm --version"
			sh "npm install"
			}
		}
		stage("Test"){
			steps {
			sh "node app.js"
		}
		}
		stage("Release the version"){
			steps {
			echo "Release the Version"
			}
		}
	}
}