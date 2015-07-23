portfolioApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("controller");
	$http.get('data/phones.json').success(function(data){
		$scope.phones = data;
	});
}]);