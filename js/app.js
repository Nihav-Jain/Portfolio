// app.js

// var portfolioApp = angular.module('portfolioApp', ['ngRoute']).config(['$stateProvider', function($stateProvider) {
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'ui.router']).config(function($routeProvider, $stateProvider) {
	console.log("here");
	// $stateProvider.state('menu', {
	// 	url: '',
	// 	abstract: true,
	// 	templateUrl: 'views/menu.html',
	// 	controller: 'PhoneListCtrl'
	// }).state('menu.about', {
	// 	url: '/about',
 //        views: {
 //            'menuContent': {
 //                templateUrl: "views/aboutme.html",
 //                controller:"PhoneListCtrl"
 //            }
 //        }
	// });
	// $routeProvider.
	// when('/about',{
	// 	templateUrl: 'views/aboutme.html',
	// 	controller: 'PhoneListCtrl'
	// }).otherwise({
	// 	redirectTo: '/'
	// });
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'views/aboutme.html',
		controller: 'PhoneListCtrl'
	});
});

portfolioApp.run(function($state){
	console.log("run");
	$state.go('about');
});