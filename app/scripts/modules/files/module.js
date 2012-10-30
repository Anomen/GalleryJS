'use strict';

(function(angular){
    angular.module('files', ['core'])
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
