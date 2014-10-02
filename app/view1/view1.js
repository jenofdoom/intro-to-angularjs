'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Articles', function($scope, Articles) {

    $scope.articles = Articles.query();

    $scope.alphabetical = true;
    $scope.sortOrder =  function(isAlphabetical) {
        if (isAlphabetical) {
            return ['title', 'published'];
        }
        return ['-title', '-published'];
    };

}]);
