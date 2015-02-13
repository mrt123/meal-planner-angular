var app = angular.module('app', [
    'ngRoute',
    'app.meals',
    'app.meal',
    'tt-food-table'
], function(){
    //angular.module('tt-food-table').constant('templatePath', 123);
    angular.module('tt-food-table').value('templatePath', 123);
});


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'views/home/home.html'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);