define(['/socket.io/socket.io.js'], function(){
    'use strict';

    // Initialize the socket connection
    var conn = io.connect('http://' + window.location.hostname);

    // Expose core functions
    var socket = {};
    socket.request = function(controller, action, data, cb){
        var uniqId = new Date().getTime();
        conn.on(uniqId, function(data){
            conn.removeListener(uniqId, this);
            cb(data);
        });
        conn.emit('request', {
            uniqId: uniqId,
            controller: controller,
            action: action,
            data: data
        });
    };

    return socket;
});
