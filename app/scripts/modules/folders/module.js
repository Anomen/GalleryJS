'use strict';

(function(angular){
    angular.module('folders', ['core'])
        .controller('Folders', function(µConfig, µMediator, µSocket, $scope, $routeParams){
            $scope.folders     = [];
            $scope.routeParams = $routeParams;
            $scope.config      = µConfig;

            // Request data from the server
            var self = this;
            µSocket.request(
                'files', // controller
                'fetch', // action
                { path: ($routeParams.path || '') },
                function(data){
                    $scope.$apply(function(){
                        $scope.folders = data;
                    });
                    µMediator.emit('folders', 'retrieve', data);
                }
            );
        });
})(angular);
