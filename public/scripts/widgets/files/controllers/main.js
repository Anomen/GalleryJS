/*global define*/
(function(){
    'use strict';
    
    var __export = function(sandbox, $scope){
        $scope.files  = [];
        $scope.config = sandbox.config;

        sandbox.on('folders:retrieve', 'files', function(data){
            $scope.$apply(function(){
                $scope.files = data;
            });
        });
    };

    // Expose the class to requirejs
    if (typeof define !== 'undefined') {
        define(function(){ return __export; });
    }
})();
