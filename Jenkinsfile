pipeline {
    agent any

    tools {
        // الاسم هنا يجب أن يطابق تماماً الاسم الذي كتبته في Global Tool Configuration
        nodejs 'NodeJS-18'
    }

    environment {
        APP_DIR = 'real-app'
        EXPORT_DIR = '/app_output'
        IMAGE_NAME = 'my-real-app:latest'
        CONTAINER_NAME = 'running-real-app'
    }

    stages {
        stage('1. Install Dependencies') {
            steps {
                dir("${env.APP_DIR}") {
                    echo '=== جاري تثبيت المكتبات وتجهيز البيئة ==='
                    sh 'npm install'
                }
            }
        }

        stage('2. Run Automated Tests') {
            steps {
                dir("${env.APP_DIR}") {
                    echo '=== جاري تشغيل الاختيارات التلقائية ==='
                    sh 'npm test'
                }
            }
        }

        stage('3. Artifact Archiving') {
    steps {
        dir("${env.APP_DIR}") {
            echo '=== تصدير نسخة الاحتياط للمجال الخارجي في Linux ==='
            sh 'mkdir -p ${EXPORT_DIR}'
            sh "tar -czf app-build-${BUILD_NUMBER}.tar.gz ."
            sh "cp app-build-${BUILD_NUMBER}.tar.gz ${env.EXPORT_DIR}/"
        }
    }
}
        stage('4. Docker Build & Deploy') {
            steps {
                dir("${env.APP_DIR}") {
                    echo '=== بناء صورة الـ Docker وتطبيق النشر ==='
                    sh "docker stop ${env.CONTAINER_NAME} || true"
                    sh "docker rm ${env.CONTAINER_NAME} || true"
                    sh "docker build -t ${env.IMAGE_NAME} ."
                    sh "docker run -d --name ${env.CONTAINER_NAME} -p 3000:3000 ${env.IMAGE_NAME}"
                }
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo '🎉 تم البناء والاختبار والنشر بنجاح!'
            echo '======================================'
        }
        failure {
            echo '❌ حدث خطأ في إحدى مراحل السلسلة.'
        }
    }
}
