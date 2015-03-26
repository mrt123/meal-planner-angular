var mealModule = angular.module('app.meal', ['ngRoute']);

mealModule.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/meal/:mealId', {
        templateUrl: 'views/meal/meal.html',
        controller: 'MealCtrl'
    });
}]);

mealModule.controller('MealCtrl', [
    '$scope',
    '$routeParams',
    'mealsDataService',
    function ($scope, $routeParams, foodDataService) {

        $scope.mealId = $routeParams.mealId;
        $scope.hidden = false;

        foodDataService.fetchData().then(function (promise) {
            $scope.foods = promise.data;  // used by options for food selection.
        });

    }]);