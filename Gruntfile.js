module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: 'app/css/*.less',
                tasks: ['less:development'],
                options: {
                    livereload: true
                }
            }
        },

        less: {
            development: {
                files: {
                    // 'output.css':'source.less'
                    "app/css/main.css": "app/css/main.less"
                }
            }
        },

        jshint: {
            files: ['app/*.js', 'app/components/**/*.js', 'app/views/**/*.js'],
            options: {
                undef: true,
                "globals": {
                    "window": true,
                    "document": true,
                    "angular": true,
                    "$": true
                },
                devel: false
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['jshint'])

    // Other tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};