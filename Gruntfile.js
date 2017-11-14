module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'css/compiled/tna-accessions.css': 'css/sass/tna-accessions.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'css/tna-accessions.css': 'css/compiled/tna-accessions.css'
                }
            }
        },
        watch: {
            /*scripts: {
                files: 'js/!*.js',
                tasks: ['concat', 'uglify']
            },*/
            css: {
                files: 'css/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        },
        /*concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/generic-utilities.js', 'js/mega-menu.js', 'js/mitigate-target-blank.js', 'js/back-to-top.js', 'js/cookie-notice.js', 'js/global-search.js', 'js/image-caption.js', 'js/tna-global.js','js/run-on-page-load.js'],
                dest: 'js/compiled/tna-base.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'js/compiled/tna-base.min.js': ['js/compiled/tna-base.js']
                }
            }
        }*/
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    //grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify', 'watch']);
    grunt.registerTask('default', ['sass','cssmin','watch']);

};