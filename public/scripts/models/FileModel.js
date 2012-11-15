/*global define, module*/
(function(){
    var Model = function(params) {
        this.path         = params.path         || '';
        this.filename     = params.filename     || '';
        this.lastModified = params.lastModified || new Date();
        this.isFolder     = params.isFolder     || false;
        this.hasPreview   = params.hasPreview   || false;
        this.hasThumb     = params.hasThumb     || false;

        if (this.path[this.path.length-1] !== "/") {
            this.path = this.path + "/";
        }

        this.thumbUrl = this.path +
            this.filename +
            '?' + this.lastModified +
            '&' + this.hasThumb;

        this.previewUrl = this.path +
            this.filename +
            '?' + this.lastModified +
            '&' + this.hasPreview;

        this.originalUrl = 'picture/' +
            this.path + 
            this.filename;
    };

    // Expose the class to angularJS
    /*
    if (typeof angular != 'undefined') {
        angular.module('ModelService', []).factory('FileModel', function() {
            return Model;
        });
    }
    */

    // Expose the class to nodejs
    if (typeof module !== 'undefined') {
        module.exports = Model;
    }
})();
