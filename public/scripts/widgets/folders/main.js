/*global define*/
(function(){
    'use strict';

    var __export = function(options, sandbox, controllers, views){
        // Define a new angular module
        var module = sandbox.angular.module();

        // Register controllers
        module.controller('MainCtrl', controllers.MainCtrl);

        sandbox.on('layout:ready', 'folders', function(){
            var el = sandbox.dom.find(options.element)[0];
            el.innerHTML = views.MainView;
            sandbox.angular.bootstrap(el, [module.name]);
        });
    };

    // Expose the function to requirejs
    if (typeof define !== 'undefined') {
        define(['sandbox', './controllers', './views'], function(sandbox, controllers, views){
            return function(options){ return __export(options, sandbox, controllers, views); };
        });
    }
})();
