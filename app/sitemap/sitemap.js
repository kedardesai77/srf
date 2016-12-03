'use strict';

angular.module('myApp.sitemap', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sitemap', {
    templateUrl: 'sitemap/sitemap.html',
    controller: 'SitemapCtrl'
  });
}])

.controller('SitemapCtrl', [function() {

  console.log("in sitemap");
  var vm = this;
  vm.showTab = 'sitemap';

}]);