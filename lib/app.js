'use strict'

var app = angular.module('movies', [
  'ngMaterial',
  'ngRoute',
  'movies.dashboard'
])

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/dashboard'})
}])
