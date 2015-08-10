/*jshint node:true*/
'use strict';
var chance = require('chance').Chance();
var common = require('../common/common-methods.js');

//variables for check rate
var button = '.hero-button-with-arrow';
var URL = 'https://localhost:9000/student/#/check-rate'; //'https://www.staging.meetearnest.com/student/#/check-rate'

var CheckRatePage = function(){
};

CheckRatePage.prototype.navigateToURL = function(URL){
    return browser.get(URL)
        .then(function(){
            browser.sleep(1000);
        });
    return expect(browser.getCurrentUrl()).toEqual(URL);
    return expect(browser.getTitle()).toEqual('Student Loan Refinance - Get Your Rate | Earnest');
};

CheckRatePage.prototype.enterDetails =function(){
    element(by.name('first_name')).sendKeys(chance.first());
    element(by.name('last_name')).sendKeys(chance.last());
    element(by.name('latest_degree')).click();
    element(by.cssContainingText('option', 'JD')).click();
    element(by.name('autocomplete_')).sendKeys('Northwestern University');
    element(by.name('current_employer')).sendKeys('Somebody');
    element(by.name('job_title')).sendKeys('Something');
    element(by.name('annual_income')).sendKeys('99000');
    element(by.name('savings_investment_total')).sendKeys('5000');
    element(by.name('refinance_amount')).sendKeys('25000');
    element(by.name('street_1')).sendKeys('123 Orion Belt');
    element(by.name('city')).sendKeys('Pasadena');
    element(by.name('state')).click();
    element(by.cssContainingText('option', 'California')).click();
    element(by.name('zip_code')).sendKeys('12345');
    element(by.css('.checkbox-row')).click();
};

CheckRatePage.prototype.createAccount = function(){
    element(by.name('email')).sendKeys(chance.email({domain: 'example.com'}));
    element(by.name('password')).sendKeys('Password1!');
};

CheckRatePage.prototype.consentToSoftInquiry = function(){
    element(by.name('ssn1')).sendKeys('123');
    element(by.name('ssn2')).sendKeys('34');
    element(by.name('ssn3')).sendKeys('5678');
    element(by.css('.checkbox-list')).click();
};

CheckRatePage.prototype.submit = function(){
    return element(by.css(button)).click();
};

CheckRatePage.prototype.submitCheckRateForm = function(){
    this.enterDetails();
    this.createAccount();
    this.consentToSoftInquiry();
    return this.submit()
        .then(function(){
            return browser.sleep(2000);
        });
};

CheckRatePage.prototype.continueToLoanApplication = function(){
    common.waitForElement(by.id('check-rate-quote-needs-more-info'));
    element(by.css('.primary-button-with-arrow')).click();
};

CheckRatePage.prototype.isSignedInUserPresent = function(){
    return element(by.className('client-info')).isPresent();
}

module.exports = CheckRatePage;
