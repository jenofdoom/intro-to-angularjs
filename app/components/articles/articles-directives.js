'use strict';

angular.module('myApp.articles.articles-directives', [])

.directive('article', [function() {
  return {
    restrict: 'E',
    templateUrl: 'components/articles/article.html'
  };
}]);
