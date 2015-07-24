/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('menuDirective',[function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl:'views/menu.html',
      controller: function($scope, $element, $state) {
        // console.log("menudirective");
        $scope.slideMenu = false;
        $scope.slideComplete = false;
        $scope.projectsClicked = function(){
          console.log("projectsClicked");
          $scope.slideMenu = true;
          setTimeout(function(){
            $scope.slideComplete = true;
            $scope.$apply();
          }, 500);
        };
      }
  };
}]);