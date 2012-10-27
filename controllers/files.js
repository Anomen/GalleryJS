var fs = require('fs')
  , config = require(__dirname + '/../config')
  , FileModel = require(__dirname + '/../models/FileModel.js');

function fetch(data, callback) {
    // List the files
    fs.readdir(config.root + data.path, function(err, files){
        //if (err) {
        //    fn(err);
        //    return;
        //}

        var ret = [];
        for (var i in files){
            //var file = File.getInstance(path, filename);

            //if (file.isFile && file.isPicture || !file.isFile)
                ret.push(new FileModel({
                    filename: files[i], 
                    path: data.path
                }));
        };

        // Return the list
        callback(ret);
    });
};

module.exports = {
	fetch: fetch
};
