var FileModelClient = require(__dirname + '/../app/scripts/models/FileModel.js');

var fs = require('fs')
  , config = require('../config')
  , im = require('imagemagick')
  , mkdirp = require('mkdirp')
  , Queue = require('../lib/queue')

module.exports = (function(){
    var FileModel = function(params){
        FileModelClient.prototype.constructor.call(this, params);
        this.getStat();
    };

    FileModel.prototype.getStat = function(){
        var stat = fs.statSync(config.root + this.path + this.filename);

		//this.id         = MD5 (path + filename);
        //this.filename   = filename;
        //this.path       = path;

        this.lastModified = stat.mtime;
        this.isFile      = stat.isFile();
        this.isFolder    = !this.isFile;
        this.isPicture   = this.filename.match(new RegExp(config.imageExt)) != null;
        if (this.isFile) {
            // It is a file
            try {
                this.hasThumb = fs.statSync(config.thumbAbsoluteDir + this.path + this.filename).mtime;
            } catch (e) {
                this.hasThumb = false;
            }
            try {
                this.hasPreview = fs.statSync(config.previewAbsoluteDir + this.path + this.filename).mtime;
            } catch (e) {
                this.hasPreview = false;
            }
        } else {
            // It is a folder
            this.hasThumb   = false;
            this.hasPreview = false;

            this.nbFiles = fs.readdirSync(config.root + this.path + this.filename).length;
        }

        this.createThumb = function(){
            var self = this;
            this.resize(config.thumbSize, config.thumbAbsoluteDir, function(){
                self.hasThumb = fs.statSync(config.thumbAbsoluteDir + self.path + self.filename).mtime;
                
                // Say to the client that it's ok
                //static.sockets.emit("thumb", {
                //    file: self
                //});
                
                // Send the new progress of the conversion
                //static.sockets.emit("progress", Queue.progress());
            });
        };

        this.createPreview = function(){
            if (!this.isPicture)
                return;

            var self = this;
            this.resize(config.previewSize, config.previewAbsoluteDir, function(){
                self.hasPreview = fs.statSync(config.previewAbsoluteDir + self.path + self.filename);
                
                // Say to the client that it's ok
                //static.sockets.emit("preview", {
                //    file: self
                //});
                
                // Send the new progress of the conversion
                //static.sockets.emit("progress", Queue.progress());
            });
        };

        this.resize = function(width, destFolder, successCb){
            // Add the process to the queue
            Queue.add(destFolder + self.path + self.filename, function(next){
                // create the cache destination
                mkdirp(destFolder + self.path);

                console.log("Start conversion of " + self.filename + ".");

                // Resize the picture
                im.convert([
                        config.root + self.path + self.filename,
                        '-resize',
                        width + 'x',
                        destFolder + self.path + self.filename
                    ],
                    function(err){
                        if (err) {
                            console.log("Error: " + err);
                        }
                        else {
                            successCb();
                        }

                        // Next in the queue
                        next();
                    }
                ); // convert()
            }); // Queue.add()

        };
    };

    return FileModel;
})();
