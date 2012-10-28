'use strict';

angular.module('galleryJSApp').controller('Test', function(sb){
    sb.scope = {
        folders     : [],
        routeParams : sb.route.params,
        config      : sb.config
    };

    // Request data from the server
    sb.socket.request('files', 'fetch', {path: (sb.route.params.path || '')}, 
        function(data){
            sb.scope.folders = data;
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
