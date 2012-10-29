'use strict'; 

(function(angular){
    var Sandbox = function(µSocket, µConfig, µMediator, µRoute, $rootScope){
        //this.scope  = $rootScope.$new();
        this.socket = µSocket;
        this.events = µMediator;
        this.config = µConfig;

        this.route = {
            params: µRoute.params,
            when  : µRoute.when
        }
    };

    // Expose the class to require
    //define(function(){ return Sandbox; });
    angular.module('sandbox', []).service('sb', Sandbox);
})(angular);
