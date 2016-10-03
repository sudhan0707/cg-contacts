'use strict';

/**
  *  Module Dependencies Definition
  */

var _       = require('lodash'),
    fs      = require('fs'),
    path    = require('path'),
    defaultAssets = require('./config/assets/default');

module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
           clientViews: {
               files: defaultAssets.client.views,
               options: {
                   livereload: true
               }
           },
            clientJS: {
                files: defaultAssets.client.js,
                options: {
                    livereload: true
                }
            },
            clientLESS: {
                files: defaultAssets.client.less,
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files:[]
            }
        },
        less: {
            dist: {
                files:[{
                    expand: true,
                    src: defaultAssets.client.less,
                    ext: '.css',
                    rename: function (base, src){
                        return src.replace('/less/','/css/');
                    }
                }]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect){
                        var staticConnects = []
                        defaultAssets.client.statics.forEach(function(dir){
                            staticConnects.push(connect.static(dir));
                        });
                        return staticConnects;
                    }
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        dest: defaultAssets.common.path.client.dest,
                        src: [ defaultAssets.common.path.server.views ]
                    }
                ]
            }
        },swig: {
            development: {
                init: {
                    autoescape: true
                },
                dest: "dist",
                src: [defaultAssets.common.path.server.views],
                generateSitemap: false,
                generateRobotstxt: false,
                jsFiles:defaultAssets.client.js
            }
        }
    });

    //Load NPM tasks
    require('load-grunt-tasks')(grunt);

    //Run the project tasks
    grunt.registerTask('mock:client', ['swig','connect:livereload', 'watch']);

}