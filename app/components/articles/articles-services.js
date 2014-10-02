'use strict';

angular.module('myApp.articles.articles-services', [])

.factory('Articles', ['$resource', function($resource){
    return $resource('articles.json', {}, {
        query: {method:'GET', params:{}, isArray:true}
    });
}]);
