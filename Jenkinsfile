pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building application...'
            }
        }
    }

    post {
        failure {
            // هذا السطر صحيح برمجياً وسيتم طباعته في الـ Console Output عند فشل الـ Pipeline
            echo '=== حدث خطأ أثناء التنفيذ ==='
        }
    }
}
