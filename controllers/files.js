var fs = require('fs')
  , config = require(__dirname + '/../config')
  , FileModel = require(__dirname + '/../models/FileModel.js');

function fetch(data, callback) {
    // List the files
    fs.readdir(config.root + data.path, function(err, files){
        var ret = [];
        for (var i in files){
            // Create a file model for each file
            var file = new FileModel({
                filename: files[i], 
                path: data.path
            });

            // Add it to the return list
            ret.push(file);

            // If no thumb, then create it
            if (!file.hasThumb)
                file.createThumb();
            
            // If no preview, then create it
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
