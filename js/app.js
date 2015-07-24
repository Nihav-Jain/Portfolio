// app.js

// var portfolioApp = angular.module('portfolioApp', ['ngRoute']).config(['$stateProvider', function($stateProvider) {
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
	// console.log("here");
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
	}).state('education', {
		url: '/education',
		templateUrl: 'views/education.html',
		controller: 'PhoneListCtrl'
	}).state('skills',{
		url: '/skills',
		templateUrl: 'views/skills.html',
		controller: 'SkillController'
	}).state('experience', {
		url: '/experience',
		templateUrl: 'views/experience.html',
		controller: 'PhoneListCtrl'
	}).state('cv', {
		url: '/resume',
		templateUrl: 'views/cv.html',
		controller: 'PhoneListCtrl'
	}).state('extra-curricular', {
		url: '/extra-curricular',
		templateUrl: 'views/extra-curricular.html',
		controller: 'ExtraCurricularController'
	}).state('otherwise', {
		url: '/404',
		templateUrl: 'views/404.html'
	});
	$urlRouterProvider.when('', '/about');
	$urlRouterProvider.when('/', '/about');
	// $urlRouterProvider.when('/projects', '/projects/games');
	$urlRouterProvider.otherwise('/404');
});

portfolioApp.run(function($state){
	// console.log("run");
	$state.go('about');
});