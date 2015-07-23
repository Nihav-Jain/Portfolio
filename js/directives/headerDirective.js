/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('headerDirective',[function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl:'views/header.html',
      controller: function($scope, $element, $state) {
        // console.log("headerdirective");
      }
  };
}]);