'use strict';
var CheckRatePage = require('./pages/check-rate.page.js');

describe('Get Your Rate', function() {

    beforeEach(function(){
        browser.get('/student/#/check-rate');
    });

    it('should go to check rate page and fill out the form', function() {
        var checkRate = new CheckRatePage(browser);
        expect(browser.getCurrentUrl()).toEqual('https://localhost:9000/student/#/check-rate');
        expect(browser.getTitle()).toEqual('Student Loan Refinance - Get Your Rate | Earnest');
        checkRate.submitCheckRateForm();
        checkRate.isSignedInUserPresent()
        .then(function(){
                return element(by.id('dashboard-overview')).isPresent();
            });
    });
});