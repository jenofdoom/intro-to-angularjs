'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1', 'myApp.articles', 'ngResource'));

  describe('view1 controller', function(){

    var $httpBackend, scope, ctrl;
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('articles.json').
            respond([
               {title: 'Test Article 1'},
               {title: 'Test Article 2'}
            ]);
        scope = $rootScope.$new();
        ctrl = $controller('View1Ctrl', {$scope: scope});
    }));

    it('should have a scope', inject(function() {
        expect(ctrl).toBeDefined();
    }));

    it('should create an "articles" model from xhr data', inject(function() {
        expect(scope.articles.length).toBe(0);
        $httpBackend.flush();
        expect(scope.articles.length).toBe(2);
    }));


  });
});
