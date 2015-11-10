// Create app
var app = angular.module('app', ['ui.router']);
// Configure app
app.config(function($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'homeCon'
	}).state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'aboutCon'
	}).state('content', {
		url: '/content',
		templateUrl: 'templates/content.html',
		controller: 'contentCon'
	})


});

// Landing page controller: define $scope.number as a number
app.controller('homeCon', function($scope) {
	$scope.home = 'hometesterino';
}).controller('aboutCon', function($scope) {
	$scope.about = 'about testerinossss';
}).controller('contentCon', function($scope) {
	$scope.content = 'http://i.imgur.com/oS47R9e.gif';
});

// About page controller: define $scope.about as a string


// Content controller: define $scope.url as an image


