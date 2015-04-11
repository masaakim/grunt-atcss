module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },

    atcss: {
      compile: {
        files: {
          'tmp/atcss.css': ['test/fixtures/atcss.css'],
        }
      }
    },

  });

  grunt.loadTasks('tasks');
  grunt.registerTask('test', ['clean', 'atcss']);
  grunt.registerTask('default', ['test']);

};

