'use strict'; 

(function(angular){
    var Sandbox = function(µSocket, µMediator, µRoute, $rootScope){
        this.scope  = $rootScope;
        this.socket = µSocket;
        this.events = µMediator;

        this.route = {
            params: µRoute.params,
            when  : µRoute.when
        }
    };

    // Expose the class to require
    //define(function(){ return Sandbox; });
    angular.module('sandbox', []).service('sb', Sandbox);
})(angular);
