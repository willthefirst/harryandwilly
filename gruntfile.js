module.exports = function(grunt) {
  grunt.initConfig ({
    sass: {
      dist: {
        files: [
          {'public/stylesheets/style.css' : 'sass/style.scss'},
          {
            expand: true,
            cwd: 'sass/pages/',
            src: ['*.scss'],
            dest: 'public/stylesheets/pages/',
            ext: '.css'
          }
        ]
      }
    },

    watch: {
      source: {
        files: ['sass/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: false, // needed to run LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
};
