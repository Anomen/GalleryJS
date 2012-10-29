'use strict';

angular.module('galleryJSApp').controller('Test', function(sb, $scope){
    $scope.folders     = [];
    $scope.routeParams = sb.route.params;
    $scope.config      = sb.config;

    // Request data from the server
    sb.socket.request('files', 'fetch', {path: (sb.route.params.path || '')}, 
        function(data){
            $scope.$apply(function(){
                $scope.folders = data;
            });
        });
})
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/layout.html',
            controller: 'Test'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
