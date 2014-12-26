module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },

    acss: {
      compile: {
        files: {
          'tmp/acss.css': ['test/fixtures/acss.css'],
        }
      }
    },

  });

  grunt.loadTasks('tasks');
  grunt.registerTask('test', ['clean', 'acss']);
  grunt.registerTask('default', ['test']);

};

