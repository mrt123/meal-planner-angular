var foodDataServiceModule = angular.module('mealsDataService', ['ngRoute']);

foodDataServiceModule.factory('mealsDataService', ['$http', '$q', function ($http, $q) {

    // CONSTANTS
    var EMPTY_PROMISE = {data: []};
    var CACHE_DEFAULT = [];
    var RESOURCE_URL = '../test/foods.json';

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
                    promise = whenNotReading(httpGetQuery(query));
                    break;
                default:
                    promise = whenNotReading(httpGet);
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

    function isReading() {
        return service.promise.then !== undefined;
    }

    /**
     *
     * @param query
     * @returns {HttpPromise}
     */
    function httpGetQuery(query) {
        return $http.get(RESOURCE_URL, {params: query});
    }

    /**
     * @returns {HttpPromise}
     */
    function httpGet() {
        return $http.get(RESOURCE_URL);
    }

    function whenNotReading(getterMethod) {
        if (!isReading()) {
            service.promise = getterMethod.call();
        }
        return service.promise;
    }

    function updateCache(resolvedPromise) {
        service.cache = resolvedPromise.data;
    }

    // ---------- PRIVATE FUNCTIONS----END---
}]);
   