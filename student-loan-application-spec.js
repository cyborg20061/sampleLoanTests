'use strict';
var CheckRatePage = require('./pages/check-rate.page.js');
var LoanApplicationPage = require('./pages/loan-application.page.js');

describe('Get Your Rate', function() {

    beforeEach(function(){
        browser.get('/student/#/check-rate');
    });

    it('should go to check rate page and fill out the form', function() {
        var checkRate = new CheckRatePage(browser);
        var loanApplication = new LoanApplicationPage(browser);
        //check rate
        checkRate.submitCheckRateForm();
        //start loan application
        checkRate.continueToLoanApplication();
        loanApplication.startLoanApplication();
        //fill out education details
        loanApplication.enterEducationInformationAndContinue();
        //fill out employment history
        loanApplication.enterEmploymentHistoryAndContinue();
        //fill out financial accounts info
        loanApplication.enterFinancialAccountsAndContinue();
        //fill out personal details and continue
        loanApplication.enterPersonalDetailsAndContinue();
    });
});