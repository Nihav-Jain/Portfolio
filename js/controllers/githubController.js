portfolioApp.controller('githubController', ['$scope', '$http', '$location', function($scope, $http, $location) {
	
	if($location.path() == "/projects/games/game-engine"){
		$http.get('https://api.github.com/repos/Nihav-Jain/GeometryWars').success(function(data){
			$scope.gitRepoData = data;
		});
		$http.get('https://api.github.com/repos/Nihav-Jain/GeometryWars/stats/participation').success(function(data){
			var arr = data.all;
			var i, count = 0;
			for(i=0;i<arr.length;i++ )
				count += arr[i];
			$scope.gitCommitData = count;
		});
		$http.get('https://api.github.com/repos/Nihav-Jain/GeometryWars/commits').success(function(data){
			$scope.latestCommit = data[0].commit.committer.date;
		});
	}


}]);