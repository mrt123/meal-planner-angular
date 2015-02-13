var foodTableModule = angular.module('tt-food-table', ['ngRoute']);

foodTableModule.constant('templatePath', 123);


// used as: "tt-food-table"
foodTableModule.directive('ttFoodTable', ['templatePath', function (templatePath) {
    return {
        templateUrl: templatePath
        //templateUrl: './tt-food-table/tt-food-table.html'
    };
}]);

//foodTableModule.directive('tt-food-table', [ function ($meal, $food, $foodData) {
//
//    return {
//        // isolate scope
//        scope: {
//        },
//        // scope is only available in link Function
//        link: function ($scope, element, attr) {
//            $scope.chosenFood = {};
//
//            $scope.$watch('chosenFoodName', function(newFoodName, oldFoodName, $scope) {
//                // oldFood will be null when can't be found in data.
//                if ($scope['chosenFoodName']) {
//
//                    // define onPublish expression for this directive.
//                    var foodUpdate = getFoodUpdate(newFoodName, oldFoodName, $foodData, $food);
//                    $scope.publishFood({'foodUpdate': foodUpdate});
//
//                    // populate columns
//                    $scope.chosenFood = foodUpdate.newFood;
//                }
//            });
//        },
//        template: function () {
//            return "<div>HARDCODED TEMPLATE</div>";
//        }
//    };
//
//}]);