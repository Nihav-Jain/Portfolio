/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('headerDirective',['menuService', function(menuService) {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl:'views/header.html',
      require: 'menuDirective'
  };
}]);