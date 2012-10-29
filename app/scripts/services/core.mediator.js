(function(){
    var Mediator = function() {
		console.log('Mediator Instance');
        this.emit = function(){
            console.log('emit');
        }
    };

    angular.module('core.service').service('µMediator', Mediator);
})();
