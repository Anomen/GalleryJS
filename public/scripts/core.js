/*global define*/
define(['aura_core', 'extensions/angular/core', 'extensions/socket/core', 'extensions/router/core'], function(AuraCore, AngularCore, SocketCore, RouterCore){
    'use strict';

    // Define the location of the widgets
    AuraCore.getWidgetsPath = function(){
        return 'widgets';
    };

    // Create the application core
    var core = Object.create(AuraCore);

    // Register extensions
    core.angular = AngularCore;
    core.socket  = SocketCore;
    core.router  = RouterCore;

    return core;
});
