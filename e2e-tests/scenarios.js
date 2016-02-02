'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] h3')).first().getText()).
        toMatch(/Articles/);
    });

    it('reduces the list of articles as the user enters a search term', function() {
      expect(element.all(by.css('.articles li')).count()).toBeGreaterThan(1);
      element(by.css('[ng-model="userInput.authors"]')).sendKeys('Holmes');
      expect(element.all(by.css('.articles li')).count()).toBe(1);
    });


  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
