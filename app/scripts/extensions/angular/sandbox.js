define(['aura_sandbox', 'core'], function(sandbox, core) {
    'use strict';
  
    var auraSandbox = Object.create(sandbox);
    auraSandbox.angular = {};
    auraSandbox.widgets = {};

    auraSandbox.angular.module = function() {
        var uniqId = new Date().getTime();
        return core.angular.module("module"+uniqId, []);
    };

    auraSandbox.angular.bootstrap = core.angular.bootstrap;
  
    auraSandbox.widgets.stop = function(channel, el) {
      return sandbox.stop.apply(this, arguments);
    };
  
    auraSandbox.widgets.start = function(channel, options) {
      return sandbox.start.apply(this, arguments);
    };
  
    return auraSandbox;

});

