'use strict';

var PRSFront = angular.module('PRSFront', [
    'ngRoute',
    'ngCookies',
    'PRSFrontControllers',
    'PRSFrontServices',
    'PRSFrontDirectives'
]);

PRSFront.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home',
        {
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        });
    $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        }
    );
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);




