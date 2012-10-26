(function(io){
    var Service = function() {
        var socket = io.connect('http://localhost');

        this.request = function(controller, action, data, cb){
            var uniqId = new Date().getTime();
            socket.on(uniqId, function(data){
                socket.removeListener(uniqId, this);
                cb(data);
            });
            socket.emit('request', {
                uniqId: uniqId,
                controller: controller,
                action: action,
                data: data
            });
        }
    };

    // Expose the class
    if (typeof angular != 'undefined') {
        angular.module('CoreService', []).factory('µCom', function() {
            return new Service;
        });
    }
})(io);