pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo '=== 1. جاري بناء التطبيق ==='
            }
        }
        stage('Test') {
            steps {
                echo '=== 2. جاري تشغيل الاختبارات التلقائية ==='
            }
        }
        stage('Deploy') {
            steps {
                echo '=== 3. جاري نشر التطبيق على Docker ==='
            }
        }
    }
}
