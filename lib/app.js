'use strict'

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngMaterial',
  'ngRoute',
  'myApp.dashboard'
])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'})
}])
