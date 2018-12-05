var app = angular.module('myApp', [ 
  'restangular',
  'ui.router',
  'ngResource',
  'myApp.services',
  'myApp.controllers']);

angular.module('myApp')
	.constant('settings',{
		STATIC_URL: '/static/'
});
app = angular.module('myApp').config(function($interpolateProvider, $httpProvider, $resourceProvider, $stateProvider, $urlRouterProvider) {
	$interpolateProvider.startSymbol('[[').endSymbol(']]');
	// CSRF Support
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	// This only works in angular 3!
	// It makes dealing with Django slashes at the end of everything easier.
	$resourceProvider.defaults.stripTrailingSlashes = false;
	// Routing
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('todo', {
		url: '/',
		templateUrl: 'static/partials/todo-list.html',
		controller: 'todoCtrl',
		})
		.state('my-todo', {
			url: 'users/:userId',
			templateUrl: 'static/partials/todo-user.html',
			controller: 'UserCtrl',
		})
		.state('update', {
			url: '/todo/:id/update',
			templateUrl: 'static/partials/todo-update.html',
			controller: 'updateCtrl'
		})

		.state('details', {
			url: '/todo/:id/detail',
			templateUrl: 'static/partials/todo-detail.html',
			controller: 'detailsCtrl'
		})
});



