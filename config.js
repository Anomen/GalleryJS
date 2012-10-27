//var requirejs = require('requirejs')
  //, _ = require('underscore');

var configClient = require(__dirname + '/app/config')
  , _ = require('underscore');

//requirejs(['./public/config.js'], function(config){
    module.exports = _.extend(configClient, {
        root: '/home/anomen/photo/', // with slash

        // Don't touch
        imageExt: /(JPG|JPEG|jpg|jpeg)$/,

        thumbAbsoluteDir: __dirname + '/app/' + configClient.thumbRelativeDir,
        previewAbsoluteDir: __dirname + '/app/' + configClient.previewRelativeDir
    });
//});
