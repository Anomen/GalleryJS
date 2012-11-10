define(['core'], function(core){
    'use strict';

    core.start([{
        channel: 'layout',
    }, {
        channel: 'folders',
        options: {
            element: '#folders'
        }
    }]);

/*
    var el = document.getElementById('folders');                                     
            
    el.innerHTML = "<div ng-controller='toto'>Hello {{'World'}}</div>";
    angular.bootstrap(el);

    angular.module('app', [])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'views/layout.html'
            });
        }]);
*/
});
