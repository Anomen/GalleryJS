(function(){
    var Mediator = function() {
        console.log("construct Mediator");
        this.events = {};

        this.on = function(moduleName, eventName, callback){
            this.events[moduleName] = this.events[moduleName] || {};
            this.events[moduleName][eventName] = this.events[moduleName][eventName] || [];

            this.events[moduleName][eventName].push(callback);
        };

        this.emit = function(moduleName, eventName, eventData){
            this.events[moduleName] = this.events[moduleName] || {};
            this.events[moduleName][eventName] = this.events[moduleName][eventName] || [];

            this.events[moduleName][eventName].each(function(callback){
                callback(eventData);
            });
        }
    };

    angular.module('core.service').service('µMediator', Mediator);
})();
