(function(){
    var Mediator = function() {
		console.log('Mediator Instance');
        this.emit = function(){
            console.log('emit');
        }
    };

    angular.module('core.service').factory('µMediator', function(){
        return new Mediator;
    });
})();
