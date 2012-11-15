/*global define, module*/
(function(){
    'use strict';

    var config = {
        previewSize: 1280,
        previewRelativeDir: 'previews/',

        thumbSize: 300,
        thumbRelativeDir: 'thumbs/'
    };

    // Expose the class to the client
    if (typeof define !== 'undefined') {
        define(config);
    }

    // Expose the class to nodejs
    if (typeof module !== 'undefined') {
        module.exports = config;
    }
})();
