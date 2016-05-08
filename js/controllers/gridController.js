portfolioApp.controller('gridController', ['$scope', '$http', '$location', 'angularGridInstance', function($scope, $http, $location, angularGridInstance) {
	
	if($location.path() == "/projects"){
		$http.get('data/projects.json').success(function(data){
			$scope.projects = data;
		});
	}

	// $scope.refresh = function(){
 //        angularGridInstance.gallery.refresh();
 //    };
}]);