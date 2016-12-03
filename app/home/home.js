'use strict';

angular.module('myApp.home', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {
  var vm = this;
  vm.showTab = 'home';
  vm.title = "Ann Arbor Meditation Circle"

}]);