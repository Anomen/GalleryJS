/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! GalleryJS - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        //'* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Kevin Vicrey; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'scripts/*.js', 'scripts/models/*.js', 'scripts/extensions/*/*.js', 'scripts/widgets/**/*.js']
    },
    //qunit: {
    //  files: ['test/**/*.html']
    //},
    concat: {
      dist: {
        src: ['dist/core/core.min.js', 'dist/core/core.angular.min.js', 'dist/core/core.router.min.js', 'dist/core/core.socket.min.js', 'dist/sandbox/sandbox.min.js', 'dist/app/app.min.js'],
        dest: 'dist/gallery.min.js'
      }
    },
    //min: {
    //  dist: {
    //    src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
    //    dest: 'dist/FILE_NAME.min.js'
    //  }
    //},
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    //uglify: {},
    requirejs: {
      app: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/launcher.js',
          name: 'app',
          out: 'dist/app/app.min.js',
          paths: {
            'core': 'empty:'
          }
        }
      },
      core: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/launcher.js',
          name: 'core',
          out: 'dist/core/core.min.js',
          paths: {
            'extensions/angular/core': 'empty:',
            'extensions/socket/core': 'empty:',
            'extensions/router/core': 'empty:'
          }
        }
      },
      sandbox: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/launcher.js',
          name: 'sandbox',
          out: 'dist/sandbox/sandbox.min.js',
          paths: {
            'core': 'empty:'
          }
        }
      },
      //=================================
      // Extensions
      //=================================
      angular: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/extensions/angular/core.js',
          name: 'extensions/angular/core',
          out: 'dist/core/core.angular.min.js',
          paths: {
            'core': 'empty:'
          }
        }
      },
      router: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/extensions/router/core.js',
          name: 'extensions/router/core',
          out: 'dist/core/core.router.min.js',
          paths: {
            'core': 'empty:'
          }
        }
      },
      socket: {
        options: {
          baseUrl: 'scripts',
          mainConfigFile: 'scripts/extensions/socket/core.js',
          name: 'extensions/socket/core',
          out: 'dist/core/core.socket.min.js',
          paths: {
            'core': 'empty:',
            'socketio': 'empty:'
          }
        }
      }
    },
    clean: {
      build: ['dist/*']
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint clean requirejs concat');

  grunt.loadNpmTasks('grunt-contrib');


};
