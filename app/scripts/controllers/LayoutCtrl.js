'use strict';

galleryJSApp.controller('LayoutCtrl', function($scope, $routeParams, µCom, FileModel) {
	$scope.folders = [];
    $scope.routeParams = $routeParams;

	// Request data from the server
	µCom.request('files', 'fetch', {path: ($routeParams.path||'')}, function(data){
        $scope.$apply(function(){
        	$scope.folders = data;
        });
	});
});
