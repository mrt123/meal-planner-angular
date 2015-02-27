var mealModule = angular.module('app.meal', ['ngRoute']);

mealModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/meal/:mealId', {
        templateUrl: 'views/meal/meal.html',
        controller: 'MealCtrl'
    });
}]);

mealModule.controller('MealCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.mealId = $routeParams.mealId;
    $scope.hidden = false;
    $scope.foods = [
        {
            "name": "oats",
            "amount": 100,
            "protein": 13.5,
            "complex": 58,
            "sugar": 0.7,
            "o3": 0.12,
            "o6": 2.8,
            "monoUnsaturated": 2.55,
            "saturated": 1.3,
            "calories": 355,
            "gi": 1,
            "id": 1
        }, {
            "name": "bread rye",
            "amount": 100,
            "protein": 3.37,
            "complex": 17.01,
            "sugar": 1.4,
            "o3": 0.0233,
            "o6": 0.52,
            "monoUnsaturated": 0.635,
            "saturated": 0.321,
            "calories": 103,
            "gi": "",
            "id": 2
        }, {
            "name": "corn flakes",
            "amount": 100,
            "protein": 6.8,
            "complex": 75,
            "sugar": 8.5,
            "o3": 1.5,
            "o6": 1.5,
            "monoUnsaturated": 0.3,
            "saturated": 0.2,
            "calories": 375,
            "gi": "",
            "id": 3
        }];
}]);