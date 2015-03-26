var foodDataServiceModule = angular.module('mealsDataService', ['ngRoute']);

foodDataServiceModule.factory('mealsDataService', ['$http', '$q', function ($http, $q) {

    // CONSTANTS
    var EMPTY_PROMISE = {data: []};
    var CACHE_DEFAULT = [];

    var service = {
        cache: CACHE_DEFAULT,
        promise: EMPTY_PROMISE,

        /**
         * @returns {promise}
         */
        fetchData: function () {
            if (!isPromiseInProgress()) {
                service.promise = fetch();
            }
            return service.promise;
        },

        /**
         * @returns {[]}
         */
        getCachedData: function () {
            return service.cache;
        }
    };

    return service;

    // private functions  -START-

    function isPromiseDefault() {
        return service.promise !== EMPTY_PROMISE;
    }

    function isPromiseInProgress() {
        return service.promise.then !== undefined;
    }

    /**
     * @returns {HttpPromise}
     */
    function fetch() {
        var promise = $http.get('../test/foods.json');
        promise.then(function (resolved) {
            updateCache(resolved);
        });
        return promise;
    }

    function updateCache(resolvedPromise) {
        service.cache = resolvedPromise.data;
    }

    // private functions  -END-
}]);
   