'use strict';

galleryJSApp.controller('LayoutCtrl', function($scope, µCom, FileModel) {
	$scope.folders = [];

	// Request data from the server
	µCom.request('files', 'fetch', {path: '/'}, function(data){
        $scope.$apply(function(){
        	$scope.folders = data;
        });
	});
});