module.exports = function (grunt) {

  var Atcss = require('atcss');

  grunt.registerMultiTask('atcss', 'Compile AtCSS', function () {

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
        var atcssFile = grunt.file.read(filepath);
        var atcss = new Atcss(atcssFile);
        return atcss.process(atcssFile);
      }).join(grunt.util.normalizelf(options.separator));

      grunt.file.write(file.dest, src);

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};

