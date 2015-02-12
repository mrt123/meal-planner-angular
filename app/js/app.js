console.log("app");

var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html'
            }).
            when('/meals', {
                templateUrl: 'partials/meals.html',
                controller: 'MealsCtrl'
            })
            otherwise({
                redirectTo: '/'
            });
    }]);


app.controller('MealsCtrl', function ($scope) {
    $scope.meals = [
        {
            id: 1,
            title: 'break',
            isCompleted: true,
            foods: [
                2,3,4
            ]
        },
        {
            id: 2,
            title: 'lun',
            isCompleted: false,
            foods: [
                1,2,3,4
            ]
        },
        {
            id: 3,
            title: 'din',
            isCompleted: false,
            foods: [
                1,2,3,4
            ]
        }
    ];
});