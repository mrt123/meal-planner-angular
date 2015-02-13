var mealsModule = angular.module('app.meals', ['ngRoute']);

mealsModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/meals', {
        templateUrl: 'views/meals/meals.html',
        controller: 'MealsCtrl'
    });
}]);

mealsModule.controller('MealsCtrl', function ($scope) {
    $scope.meals = [
        {
            id: 1,
            title: 'break',
            isCompleted: true,
            foods: [
                2, 3, 4
            ]
        },
        {
            id: 2,
            title: 'lun',
            isCompleted: false,
            foods: [
                1, 2, 3, 4
            ]
        },
        {
            id: 3,
            title: 'din',
            isCompleted: false,
            foods: [
                1, 2, 3, 4
            ]
        }
    ];
});