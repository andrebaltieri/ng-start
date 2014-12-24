module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: "bower_components",
                    layout: "byComponent",
                    cleanTargetDir: false
                }
            }
        },
        cssmin: {
            sitecss: {
                files: {
                    'wwwroot/assets/css/styles-bundle.min.css': [
                        'bower_components/angular-material/angular-material.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'bower_components/hammerjs/hammer.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-animate/angular-animate.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-material/angular-material.js'
                ],
                dest: 'wwwroot/assets/libs/scripts-bundle.min.js'
            }
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-bower-task");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
};