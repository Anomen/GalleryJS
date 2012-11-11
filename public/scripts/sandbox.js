define(['aura_sandbox', 'config', 'core', 'perms'], function(AuraSandbox, config, core, perms) {
    'use strict';
  
    var sandbox = Object.create(AuraSandbox);

    //==================================================
    // General configuration
    //==================================================
    sandbox.config = config;

    //==================================================
    // Sockets
    //==================================================
    sandbox.socket = core.socket;

    //==================================================
    // Routing
    //==================================================
    sandbox.router = {};
    sandbox.router.on = function(URL, fn){
        core.router.on(URL, fn);
    };
    sandbox.router.params = function(){
        return core.router.params;
    };

    //==================================================
    // Angular
    //==================================================
    sandbox.angular = {};
    sandbox.angular.module = function() {
        var uniqId = new Date().getTime();
        return core.angular.module("module"+uniqId, []);
    };

    sandbox.angular.bootstrap = core.angular.bootstrap;
  
    //==================================================
    // Widgets
    //==================================================
    sandbox.widgets = {};
    sandbox.widgets.stop = function(channel, el) {
      return sandbox.stop.apply(this, arguments);
    };
  
    sandbox.widgets.start = function(channel, options) {
      return sandbox.start.apply(this, arguments);
    };
  
    return sandbox;
});

