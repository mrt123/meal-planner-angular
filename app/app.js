console.log("app");

var app = angular.module('app', ['ngRoute', 'app.meals', 'app.meal']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/home/home.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);

