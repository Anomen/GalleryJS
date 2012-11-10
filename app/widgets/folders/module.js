'use strict';

(function(angular){
    angular.element(document).ready(function(){
        var el = document.getElementById('folders');
        angular.element(el).ready(function(){
            el.innerHTML = "Hello {{'World'}}";
            angular.bootstrap(el);
        });
    });
        /*
    angular.module('folders', ['core'])
        .directive('folders', function($compile){
            return {
                templateUrl: 'scripts/modules/folders/views/folders.html',
                replace : true,
                controller: 'Folders'
            };
        })
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
        */
})(angular);
