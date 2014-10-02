'use strict';

angular.module('myApp.articles.articles-filters', [])

.filter('authorList', [function(){
    return function(array) {
        return array.join(', ');
    }
}]);
