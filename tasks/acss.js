module.exports = function (grunt) {

  var Acss = require('acss');

  grunt.registerMultiTask('acss', 'Compile ACSS', function () {

    var options = this.options ({
      punctuation: '.',
      separator: '\n'
    });

    this.files.forEach(function (file) {
      var src = file.src.filter(function (filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        var acssFile = grunt.file.read(filepath);
        var acss = new Acss(acssFile);
        return acss.process(acssFile);
      }).join(grunt.util.normalizelf(options.separator));

      grunt.file.write(file.dest, src);

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};

