'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mwl.calendar',
  'ui.bootstrap',
  'ngAnimate',
  'myApp.login',
  'myApp.home',
  'myApp.about',
  'myApp.schedule',
  'myApp.calendar',
  'myApp.events',
  'myApp.giving',
  'myApp.gallery',
  'myApp.sitemap',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
