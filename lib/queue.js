var _ = require('underscore');

module.exports = (function(){
    var instance = null;

    var Queue = function() {
        var self = this;

        this.numberThreads = 2;
        this.queue = [];
        this.totalInProgress = 0;

        this.add = function(id, process){
            var alreayIn = _.find(this.queue, function(p){
                return p.id == id;
            });
            if (alreayIn) return;

            // The process does not exist, let's do it.
            this.queue.push({
                id: id,
                process: process
            });
            ++this.totalInProgress;
            this.process();
        };

        this.process = function(){
            if (this.numberThreads == 0)
                return;

            --this.numberThreads;

            var process = _.first(this.queue);
            if (typeof process != "undefined") {
                process.process(function(){
                    self.queue.splice(0,1);
                    ++self.numberThreads;
                    self.process();
                });
            } 
            else {
                ++this.numberThreads;
                this.totalInProgress = 0;
            }
        };

        this.progress = function(){
            return {
                total: this.totalInProgress,
                todo : this.queue.length
            };
        }
    }

    return {
        getInstance: function(){
            if (instance != null) {
                return instance;
            }

            instance = new Queue();
            return instance;
        },
        add: function(id, cb){
            this.getInstance().add(id, cb);
        },
        progress: function(){
            return this.getInstance().progress()
        }
    };
})();
