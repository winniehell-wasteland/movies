'use strict'

var dashboard = angular.module('movies.dashboard', ['ngRoute'])

dashboard.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'lib/dashboard/dashboard.html',
    controller: 'DashboardCtrl',
    controllerAs: 'dashboard'
  })
}])

dashboard.controller('DashboardCtrl', DashboardCtrl)

function DashboardCtrl () {
  var movieTitles = Lazy([
    'Alien vs. Predator',
    'Batman',
    'Cypher',
    'Duplicity',
    'Equilibrium',
    'Frankenstein',
    'Good Will Hunting',
    'The Hunger Games',
    'The Island',
    'Up in the Air'
  ])

  var vm = this

  vm.recommendedMovies = movieTitles.shuffle().take(5).map(createMovieObject).toArray()
  vm.friendLikedMovies = movieTitles.shuffle().take(5).map(createMovieObject).toArray()
  vm.friendWatchedMovies = movieTitles.shuffle().take(5).map(createMovieObject).toArray()
}

function createMovieObject (movieTitle) {
  return {
    title: movieTitle
  }
}
