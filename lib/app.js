'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngMaterial',
  'ngRoute',
  'myApp.dashboard'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
