var foodTableModule = angular.module('tt-food-table', ['ngRoute']);

/**
 * - make module aware of its location (must be assigned when script is first executed by browser!).
 * - make sure template is located on the same path as script after build
 */
foodTableModule.scriptPath = [].slice.call(document.getElementsByTagName("script")).pop().getAttribute("src");

// used as: "tt-food-table"
foodTableModule.directive('ttFoodTable', [ function () {

    return {
        restrict: 'E', //directive to be used as element only!
        // isolated scope
        scope: {
            // @ assign string representation (one way)
            // = assign actual scope model (two way)
            // & create a delegate function
            //for @var remember to use hyphen based notation on bound attributes.
            saveIcon: '=',
            actionIconAction: '&',
            foods: '='
        },
        link: function ($scope, element, attr) {
        },
        templateUrl: foodTableModule.scriptPath.replace('.js', '.html')

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