'use strict';

galleryJSApp.controller('LayoutCtrl', function($scope, $routeParams, µCom, µConfig, FileModel) {
	$scope.folders = [];
    $scope.routeParams = $routeParams;
    $scope.config = µConfig;

	// Request data from the server
	µCom.request('files', 'fetch', {path: ($routeParams.path||'')}, function(data){
        $scope.$apply(function(){
        	$scope.folders = data;
        });
	});
});
