/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('headerDirective',['menuService', function(menuService) {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl:'views/header.html',
      require: '^menuService',
      controller: function($scope, $element, $state) {
        // console.log("headerdirective");
        $scope.backgroundClass = "about-header";
        $scope.$watch(function(){
          return menuService.selectedTile;
        }, function(value){
          if(value){
            var newClass = value.colorClass;
            newClass = newClass.substring(0, newClass.indexOf('-')+1);
            $scope.backgroundClass = newClass + "header";
            console.log(newClass);
          }
        });
      }
  };
}]);