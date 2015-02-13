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
}]);