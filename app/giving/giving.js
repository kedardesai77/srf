'use strict';

angular.module('myApp.giving', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/giving', {
    templateUrl: 'giving/giving.html',
    controller: 'GivingCtrl'
  });
}])

.controller('GivingCtrl', [function() {

  var vm = this;
  vm.showTab = 'giving';

}]);