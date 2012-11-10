(function(){
    'use strict';
    
    var Ctrl = function($scope, $route){
        $scope.toto = "toto";
        setTimeout(function(){ 
            $scope.$apply(function(){$scope.toto = "titi";}) 
        }, 2000);
    };

    // Expose the controller
    define(["sandbox"], function(sandbox){ return Ctrl; });
})();

