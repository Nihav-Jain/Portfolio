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
      }
  };
}]);