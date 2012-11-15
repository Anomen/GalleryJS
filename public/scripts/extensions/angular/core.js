/*global requirejs, angular, define*/
requirejs.config({
    shim: {
        angular: {
            exports: 'angular'
        }
    },
    paths: {
        angular: 'extensions/angular/vendor/angular-1.0.2'
    }
});

define(['angular'], function(){
    'use strict';

    return angular;
});
