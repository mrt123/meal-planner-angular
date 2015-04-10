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
        fetchData: function (query) {
            var promise;

            switch(query !== undefined) {
                case true:
                    promise = doWhenReadIsIdle(httpGetQuery(query));
                    break;
                default:
                    promise = doWhenReadIsIdle(httpGet);
            }

            promise.then(function (resolved) {
                updateCache(resolved);
            });

            return promise;
        },

        /**
         * @returns {[]}
         */
        getCachedData: function () {
            return service.cache;
        }
    };

    return service;


    // ---------- PRIVATE FUNCTIONS----START---

    function isPromiseDefault() {
        return service.promise !== EMPTY_PROMISE;
    }

    function isPromiseInProgress() {
        return service.promise.then !== undefined;
    }

    /**
     *
     * @param query
     * @returns {HttpPromise}
     */
    function httpGetQuery(query) {
        return $http.get(RESORUCE_URL, {params: query});
    }

    /**
     * @returns {HttpPromise}
     */
    function httpGet() {
        return $http.get(RESORUCE_URL);
    }

    function doWhenReadIsIdle(getterMethod) {
        if (!isPromiseInProgress()) {
            service.promise = getterMethod.call();
        }
        return service.promise;
    }

    function updateCache(resolvedPromise) {
        service.cache = resolvedPromise.data;
    }

    // ---------- PRIVATE FUNCTIONS----END---
}]);
   