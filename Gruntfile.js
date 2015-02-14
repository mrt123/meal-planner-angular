module.exports = function(grunt) {

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
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);

    // Other tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
};