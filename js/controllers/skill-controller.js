portfolioApp.controller('SkillController', ['$scope', '$http', function($scope, $http) {
	// console.log("skillcontroller");
	$scope.skills = null;
	$scope.animate = true;
	$http.get('data/skills.json').success(function(data){
		// // console.log(data);
		$scope.skills = data.skills;
		setTimeout(function(){
			console.log("here");
			$scope.animate = false;
			$scope.$apply();
		}, 100);
	});
}]);