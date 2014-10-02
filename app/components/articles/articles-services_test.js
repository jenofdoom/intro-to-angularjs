'use strict';

describe('myApp.articles module', function() {
  beforeEach(module('myApp.articles', 'ngResource'));

  describe('articles service', function() {

    it('should make the Articles factory available', inject(function(Articles, $resource) {
      expect(Articles).toBeDefined();
    }));

  });
});
