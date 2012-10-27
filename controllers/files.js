var fs = require('fs')
  , config = require(__dirname + '/../config')
  , FileModel = require(__dirname + '/../models/FileModel.js');

function fetch(data, callback) {
    // List the files
    fs.readdir(config.root + data.path, function(err, files){
        var ret = [];
        for (var i in files){
            var file = new FileModel({
                filename: files[i], 
                path: data.path
            });
            ret.push(file);

            if (!file.hasThumb)
                file.createThumb();
            if (!file.hasPreview)
                file.createPreview();
        }

        // Return the list
        callback(ret);
    });
};

module.exports = {
	fetch: fetch
};
