(function(io){
    var CoreSocket = function(µConfig) {
        var socket = io.connect('http://' + window.location.hostname);

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

    angular.module('core.service').factory('µSocket', function(){
        return new CoreSocket;
    });
})(io);
