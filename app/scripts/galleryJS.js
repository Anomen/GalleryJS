'use strict';
var galleryJSApp = angular.module('galleryJSApp', ['ModelService', 'CoreService'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/layout.html',
                controller: 'LayoutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
