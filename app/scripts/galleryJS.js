'use strict';

var galleryJSApp = angular.module('galleryJSApp', ['ModelService', 'core', 'sandbox'])
	/*
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
	*/
	.run(function(µModule){
        //µModule.register('folders');
        µModule.startAll();
	});
