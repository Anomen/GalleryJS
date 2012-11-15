/*global define, console*/
(function(){
    'use strict';
    
    var __export = function(sandbox, $scope){
        $scope.folders     = [];
        $scope.routeParams = {
            path: '/'
        };
        $scope.config      = sandbox.config;

        // Request data from the server
        var self = this;
        sandbox.router.on(':path*:', function(path){
            console.log("path:");
            console.log(path);
            $scope.routeParams.path = path;

            sandbox.socket.request(
                'files', // controller
                'fetch', // action
                { path: path || '/' },
                function(data){
                    $scope.$apply(function(){
                        $scope.folders = data;
                    });
                    sandbox.emit('folders:retrieve', data);
                }
            );
        });
    };

    // Expose the class to requirejs
    if (typeof define !== 'undefined') {
        define(function(){ return __export; });
    }
})();
