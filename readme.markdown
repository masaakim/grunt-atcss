# grunt-acss [![Build Status](https://travis-ci.org/morishitter/grunt-acss.svg)](https://travis-ci.org/morishitter/grunt-acss)

> for processing [ACSS](https://github.com/morishitter/acss)

## Getting Started
This plugin requires Grunt`~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-acss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-acss');
```

## The "acss" task

### Overview
In your project's Gruntfile, add a section named `acss` to the data object passed into `grunt.initConfig(`.

```js
grunt.initConfig({
  acss: {
    compile: {
      files: {
        'tmp/acss.css': ['test/fixtures/acss.css'],
      }
    }
  },
});
```)

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
