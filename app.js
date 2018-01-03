//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);

//ROUTES
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forescastController'
    })
});

//Services
weatherApp.service('cityService', function() {
    this.city = "New York, NY";
})

weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.city = cityService.city;
    
    //faz com que o HTML alere o escopo
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
}]);

weatherApp.controller('forescastController',['$scope', 'cityService',  function($scope, cityService) {
       $scope.city = cityService.city;     
}]);