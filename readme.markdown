# grunt-atcss [![Build Status](https://travis-ci.org/morishitter/grunt-atcss.svg)](https://travis-ci.org/morishitter/grunt-atcss)

> for processing [AtCSS](https://github.com/morishitter/atcss)

## Getting Started
This plugin requires Grunt`~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-atcss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-atcss');
```

## The "atcss" task

### Overview
In your project's Gruntfile, add a section named `atcss` to the data object passed into `grunt.initConfig(`.

```js
grunt.initConfig({
  atcss: {
    compile: {
      files: {
        'tmp/atcss.css': ['test/fixtures/atcss.css'],
      }
    }
  },
});
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
