(function(){
    var config = {
        previewSize: 1280,
        previewRelativeDir: 'previews/',

        thumbSize: 300,
        thumbRelativeDir: 'thumbs/'
    };

    // Expose the class to angularJS
    if (typeof angular != 'undefined') {
        angular.module('CoreService').constant('µConfig', config);
    }

    // Expose the class to nodejs
    if (typeof module != 'undefined')
        module.exports = config;
})();
