'use strict';

(function(angular){
    angular.module('files', ['core'])
        .directive('files', function($compile){
            /*
            $scope.files       = [];
            $scope.routeParams = $routeParams;
            $scope.config      = µConfig;

            µMediator.on('folders', 'retrieve', function(data){
                $scope.$apply(function(){
                    $scope.files = data;
                });
            });
            */

            return {
                templateUrl: 'scripts/modules/files/views/files.html',
                replace : true,
                controller: 'Files'
            };
        })
        .controller('Files', function(µConfig, µMediator, $scope, $routeParams){
            $scope.files       = [];
            $scope.routeParams = $routeParams;
            $scope.config      = µConfig;

            µMediator.on('folders', 'retrieve', function(data){
                $scope.$apply(function(){
                    $scope.files = data;
                });
            });
        });
})(angular);
