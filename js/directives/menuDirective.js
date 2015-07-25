/**
  * @class Directives.AccountSelection
  * This is a directive implementing 'Hello-World'.
  */
portfolioApp.directive('menuDirective',['menuService', function(menuService) {
  return {
      restrict: 'AE',
      replace: 'true',
      require: '^menuService',
      templateUrl:'views/menu.html',
      controller: function($scope, $element, $http, $window, $anchorScroll) {

        var w = angular.element($window);
        w.bind('resize', function(){
          $scope.$apply();
        });
        
        $scope.menus = [];
        $scope.activeMenuIndex = 0;
        $scope.menuStatus = [];

        // $http.get('data/menu.json').success(function(data){
        menuService.getMenuData().success(function(data){  
          // console.log(data);
          $scope.menus = data.menus;
          menuService.menus = data.menus;
          menuService.selectedTile = menuService.menus[0].tiles[0];
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
          menuService.selectedTile = menuService.menus[$scope.activeMenuIndex].tiles[$index];
          $anchorScroll();
        };

        $scope.backClicked = function(){
          $scope.activeMenuIndex = $scope.menus[$scope.activeMenuIndex].backMenuIndex;
          $scope.updateMenuStatus();
          menuService.selectedTile = menuService.menus[$scope.activeMenuIndex].tiles[0];
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