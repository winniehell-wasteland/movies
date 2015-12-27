'use strict'

var dashboard = angular.module('myApp.dashboard', ['ngRoute'])

dashboard.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'lib/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  })
}])

dashboard.controller('DashboardCtrl', [DashboardCtrl])

function DashboardCtrl () {

}
