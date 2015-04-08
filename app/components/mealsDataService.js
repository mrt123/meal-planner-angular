var foodDataServiceModule = angular.module('mealsDataService', ['ngRoute']);

foodDataServiceModule.factory('mealsDataService', ['$http', '$q', function ($http, $q) {

    // CONSTANTS
    var EMPTY_PROMISE = {data: []};
    var CACHE_DEFAULT = [];
    var RESORUCE_URL = '../test/foods.json';

    var service = {
        cache: CACHE_DEFAULT,
        promise: EMPTY_PROMISE,

        /**
         * @returns {promise}
         */
        fetchData: function () {
            // TODO: find a way to OVERLOAD to serve both: QUERY & FetchAll
            // TODO: use single function for API and 2 private functions inside
            return httpGetWhenIdle();
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

    // TODO: use later for overloaded API
    function httpQuery(params) {
        var promise = $http.get(RESORUCE_URL,
            {
                params : params
            });
        promise.then(function (resolved) {
            updateCache(resolved);
        });
        return promise;
    }

    /**
     * @returns {HttpPromise}
     */
    function httpGet() {
        var promise = $http.get(RESORUCE_URL);
        promise.then(function (resolved) {
            updateCache(resolved);
        });
        return promise;
    }

    function httpGetWhenIdle() {
        if (!isPromiseInProgress()) {
            service.promise = httpGet();
        }
        return service.promise;
    }

    function updateCache(resolvedPromise) {
        service.cache = resolvedPromise.data;
    }

    // private functions  -END-
}]);
   