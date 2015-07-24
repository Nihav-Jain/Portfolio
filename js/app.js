// app.js

// var portfolioApp = angular.module('portfolioApp', ['ngRoute']).config(['$stateProvider', function($stateProvider) {
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'ui.router']).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: 'views/aboutme.html',
	}).state('education', {
		url: '/education',
		templateUrl: 'views/education.html',
	}).state('skills',{
		url: '/skills',
		templateUrl: 'views/skills.html',
		controller: 'SkillController'
	}).state('experience', {
		url: '/experience',
		templateUrl: 'views/experience.html',
	}).state('cv', {
		url: '/resume',
		templateUrl: 'views/cv.html',
	}).state('extra-curricular', {
		url: '/extra-curricular',
		templateUrl: 'views/extra-curricular.html',
	}).state('games', {
		url: '/projects/games',
		templateUrl: 'views/projects/games.html'
	}).state('flash-as3', {
		url: '/projects/flash-as3',
		templateUrl: 'views/projects/flash-as3.html'
	}).state('bisag', {
		url: '/projects/bisag',
		templateUrl: 'views/projects/bisag.html'
	}).state('personal', {
		url: '/projects/personal',
		templateUrl: 'views/projects/personal.html'
	}).state('mobile', {
		url: '/projects/mobile',
		templateUrl: 'views/projects/mobile.html'
	}).state('eattend', {
		url: '/projects/under-graduate/eattend',
		templateUrl: 'views/projects/under-graduate/eattend.html'
	}).state('compiler-design', {
		url: '/projects/under-graduate/compiler-design',
		templateUrl: 'views/projects/under-graduate/compiler-design.html'
	}).state('multimedia-computing', {
		url: '/projects/under-graduate/multimedia-computing',
		templateUrl: 'views/projects/under-graduate/multimedia-computing.html'
	}).state('parallel-computing', {
		url: '/projects/under-graduate/parallel-computing',
		templateUrl: 'views/projects/under-graduate/parallel-computing.html'
	}).state('bits-online-notice-board', {
		url: '/projects/under-graduate/bits-online-notice-board',
		templateUrl: 'views/projects/under-graduate/bits-online-notice-board.html'
	}).state('software-testing', {
		url: '/projects/under-graduate/software-testing',
		templateUrl: 'views/projects/under-graduate/software-testing.html'
	}).state('otherwise', {
		url: '/404',
		templateUrl: 'views/404.html'
	});
	$urlRouterProvider.when('', '/about');
	$urlRouterProvider.when('/', '/about');
	$urlRouterProvider.when('/projects', '/projects/games');	
	$urlRouterProvider.when('/projects/under-graduate', '/projects/under-graduate/eattend');
	$urlRouterProvider.otherwise('/404');
});

portfolioApp.run(function($state){
	// console.log("run");
	$state.go('about');
});