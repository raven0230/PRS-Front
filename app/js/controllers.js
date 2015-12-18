var PRSFrontControllers = angular.module('PRSFrontControllers', []);

PRSFrontControllers.controller('loginCtrl', ['$scope', function ($scope) {
    $scope.title = 'Login Page';
}]);

PRSFrontControllers.controller('homeCtrl', ['$scope', function ($scope) {
    $scope.title = 'Welcome back!';
}]);

PRSFrontControllers.controller('indexController', function ($scope) {
    $scope.navBarItem = [{name: 'Home', view: 'home'}, {name: 'Search', view: 'search'},
        {name: 'Jobs', view: 'jobs'}];
});