'use strict';
var CheckRatePage = require('./pages/check-rate.page.js');

describe('Get Your Rate', function() {
    it('should go to check rate page and fill out the form', function() {
        var checkRate = new CheckRatePage(browser);
        checkRate.navigateToURL();
        expect(browser.getTitle()).toEqual('Student Loan Refinance - Get Your Rate | Earnest');
        return checkRate.submitCheckRateForm();
    });
});