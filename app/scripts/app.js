'use strict';

angular.module('app', ['ModelService', 'core', 'folders', 'files'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/layout.html'
        });
    }]);
