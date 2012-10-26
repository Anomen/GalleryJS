(function(angular){
    var Model = function(params) {
        this.path         = params.path         || '';
        this.filename     = params.filename     || '';
        this.lastModified = params.lastModified || new Date;
        this.isFolder     = params.isFolder     || false;
        this.hasPreview   = params.hasPreview   || false;
        this.hasThumb     = params.hasThumb     || false;

        this.thumbUrl = /*config.thumbRelativeDir
            +*/ this.path
            + this.filename
            + '?' + this.lastModified
            + '&' + this.hasThumb;

        this.previewUrl = /*config.previewRelativeDir
            +*/ this.path
            + this.filename
            + '?' + this.lastModified
            + '&' + this.hasPreview;

        this.originalUrl = 'picture/'
            + this.path
            + this.filename;
    };

    // Expose the class
    if (typeof angular != 'undefined') {
        angular.module('ModelService', []).factory('FileModel', function() {
            return Model;
        });
    }
})(angular);