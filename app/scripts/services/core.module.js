(function(){
    var Module = function() {
		console.log('Mediator Instance');
        this.register = function(name){
            //require(['scripts/modules/' + name + '/module'], function(module){
                console.log('register ' + name);
                var sb = angular.injector(['ng', name]);
            //    new module(sb);
            //});
        }
        this.startAll = function(){
            console.log('start all');
        }
    };

    angular.module('core.service').service('µModule', Module);
})();
