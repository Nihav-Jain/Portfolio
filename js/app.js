// app.js

var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'angularGrid']).config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/aboutme.html'
	}).when('/about', {
		redirectTo: '/'
	}).when('/education', {
		templateUrl: 'views/education.html'
	}).when('/skills', {
		templateUrl: 'views/skills.html',
		controller: 'viewController'
	}).when('/experience', {
		templateUrl: 'views/experience.html'
	}).when('/resume', {
		templateUrl: 'views/cv.html'
	}).when('/extra-curricular', {
		templateUrl: 'views/extra-curricular.html'
	}).when('/projects/games', {
		redirectTo: '/projects'
	}).when('/projects/games/thechanneler', {
		templateUrl: 'views/projects/games/thechanneler.html'
	}).when('/projects/games/game-engine', {
		templateUrl: 'views/projects/games/game-engine.html',
		controller: 'githubController'
	}).when('/projects/games/angry-birds', {
		templateUrl: 'views/projects/games/angry-birds.html'
	}).when('/projects/games/d3', {
		templateUrl: 'views/projects/games/d3.html'
	}).when('/projects/games/pipeland', {
		templateUrl: 'views/projects/games/pipes.html'
	}).when('/projects/games/space-between', {
		templateUrl: 'views/projects/games/space-between.html'
	}).when('/projects/games/kite-fite', {
		templateUrl: 'views/projects/games/kite-fite.html'
	}).when('/projects/games/thechanneler-vr', {
		templateUrl: 'views/projects/games/thechanneler-vr.html'
	}).when('/projects/games/relativity', {
		templateUrl: 'views/projects/games/relativity.html'
	}).when('/projects/games/interactive-68k', {
		templateUrl: 'views/projects/games/interactive-68k-game.html'
	}).when('/projects/games/pacman', {
		templateUrl: 'views/projects/games/pacman.html'
	}).when('/projects/games/lacuna-2013', {
		templateUrl: 'views/projects/games/lacuna-2013.html'
	}).when('/projects/games/lacuna-2012', {
		templateUrl: 'views/projects/games/lacuna-2012.html'
	}).when('/projects', {
		templateUrl: 'views/projects.html',
		controller: 'gridController'
	}).when('/projects/flash-as3', {
		templateUrl: 'views/projects/flash-as3.html'
	}).when('/projects/bisag', {
		templateUrl: 'views/projects/bisag.html'
	}).when('/projects/globallogic', {
		templateUrl: 'views/projects/globallogic.html'
	}).when('/projects/websites/oasis-2012', {
		templateUrl: 'views/projects/websites/oasis-2012.html'
	}).when('/projects/websites/oasis-2012-intro', {
		templateUrl: 'views/projects/websites/oasis-2012-intro.html'
	}).when('/projects/personal', {
		templateUrl: 'views/projects/personal.html'
	}).when('/projects/mobile', {
		templateUrl: 'views/projects/mobile.html'
	}).when('/projects/under-graduate/eattend', {
		templateUrl: 'views/projects/under-graduate/eattend.html'
	}).when('/projects/under-graduate', {
		redirectTo: '/projects/under-graduate/eattend'
	}).when('/projects/under-graduate/compiler-design', {
		templateUrl: 'views/projects/under-graduate/compiler-design.html'
	}).when('/projects/under-graduate/multimedia-computing', {
		templateUrl: 'views/projects/under-graduate/multimedia-computing.html'
	}).when('/projects/under-graduate/parallel-computing', {
		templateUrl: 'views/projects/under-graduate/parallel-computing.html'
	}).when('/projects/under-graduate/bits-online-notice-board', {
		templateUrl: 'views/projects/under-graduate/bits-online-notice-board.html'
	}).when('/projects/under-graduate/software-testing', {
		templateUrl: 'views/projects/under-graduate/software-testing.html'
	}).when('/404', {
		templateUrl: 'views/404.html'
	}).otherwise({
		redirectTo: '/404'
	});
});

portfolioApp.run(function(){
	// console.log("run");
});