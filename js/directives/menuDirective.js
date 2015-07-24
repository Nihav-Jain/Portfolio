/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('menuDirective',[function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl:'views/menu.html',
      controller: function($scope, $element, $http, $window, $anchorScroll) {

        var w = angular.element($window);
        w.bind('resize', function(){
          $scope.$apply();
        });
        
        $scope.menus = [];
        $scope.activeMenuIndex = 0;
        $scope.menuStatus = [];

        $http.get('data/menu.json').success(function(data){
          // console.log(data);
          $scope.menus = data.menus;
          var i;
          for(i=0;i<$scope.menus.length;i++){
            $scope.menuStatus.push(false);
          }
          $scope.menuStatus[$scope.activeMenuIndex] = true;
        });
        
        $scope.menuTileClicked = function($index){
          if($scope.menus[$scope.activeMenuIndex].tiles[$index].nextMenu){
            $scope.activeMenuIndex = $scope.menus[$scope.activeMenuIndex].tiles[$index].nextMenu;
            $scope.updateMenuStatus();
          }
          $anchorScroll();
        };

        $scope.backClicked = function(){
          $scope.activeMenuIndex = $scope.menus[$scope.activeMenuIndex].backMenuIndex;
          $scope.updateMenuStatus();
          $anchorScroll();
        };

        $scope.updateMenuStatus = function(){
          var i;
          for(i=0;i<$scope.menuStatus.length;i++){
            $scope.menuStatus[i] = false;
          }
          $scope.menuStatus[$scope.activeMenuIndex] = true;
        };

        $scope.getMenuStatus = function($index){
          // return $scope.menuStatus[$index];
          return $scope.menuStatus[$index] || ($index <= $scope.activeMenuIndex);
        };

        $scope.navViewCondition = function(){
          return !($window.innerWidth < 1000);
        };
      }
  };
}]);