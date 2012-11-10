define(["sandbox"], function(sandbox){ 
    'use strict';
    
    var Ctrl = function($scope){
        $scope.files  = [];
        $scope.config = sandbox.config;

        sandbox.on('folders:retrieve', 'files', function(data){
            $scope.$apply(function(){
                $scope.files = data;
            });
        });
    };

    return Ctrl;
});

