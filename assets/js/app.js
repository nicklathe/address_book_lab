var addressApp = angular.module('AddressApp', ['ngRoute', 'ui.bootstrap']);

addressApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/contact/new', {
            templateUrl: '/views/contact/new.html',
            controller: 'ContactNewCtrl'
        })
        .when('/contact/:id', {
            templateUrl: '/views/contact/show.html',
            controller: 'ContactShowCtrl'
        })
}])