(function(){
    var Route = function($routeParams) {
        this.when = function(route, options){
			window.routeProvider.when(route, options); // FIXME UGLLYY
        };
		this.params = $routeParams;
    };

    angular.module('core.service').factory('µRoute',  Route);
})();
