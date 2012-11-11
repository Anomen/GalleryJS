define(['sandbox', './controllers', './views'], function(sandbox, Controllers, Views){
    'use strict';

    return function(options){
        // Define a new angular module
        var module = sandbox.angular.module();

        // Register controllers
        module.controller('MainCtrl', Controllers.MainCtrl);

        sandbox.on('layout:ready', 'folders', function(){
            var el = sandbox.dom.find(options.element)[0];
            el.innerHTML = Views.MainView;
            sandbox.angular.bootstrap(el, [module.name]);
        });
    };
});
