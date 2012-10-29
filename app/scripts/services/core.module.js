(function(){
    var Module = function() {
		console.log('Mediator Instance');
        this.register = function(name){
            require(['scripts/modules/' + name + '/module'], function(module){
                console.log('register ' + name);
                //module();
            });
        }
        this.startAll = function(){
            console.log('start all');
        }
    };

    angular.module('core.service').service('µModule', Module);
})();
