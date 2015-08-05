/*jshint node:true*/
'use strict';
var chance = require('chance').Chance();
var common = require('../common/common-methods.js');

//global variables
var firstName = 'first_name';
var lastName = 'last_name';
var latestDegree = 'latest_degree';
var university = 'autocomplete_';
var currentEmployer = 'current_employer';
var jobTitle = 'job_title';
var annualIncome = 'annual_income';
var savingsInvestmentTotal = 'savings_investment_total';
var refinanceAmount = 'refinance_amount';
var street = 'street_1';
var city = 'city';
var zipCode = 'zip_code';
var state = 'state';
var citizenshipStatus = '.checkbox-row';

var email = 'email';
var password = 'password';

var ssn1 = 'ssn1';
var ssn2 = 'ssn2';
var ssn3 = 'ssn3';
var termsOfService = '.checkbox-list';

var getYourRateButton = '.hero-button-with-arrow';

var CheckRatePage = function(){
};

CheckRatePage.prototype.navigateToURL = function(){
    return browser.get('https://localhost:9000/student/#/check-rate')
        .then(function(){
            browser.sleep(1000);
        });
};

CheckRatePage.prototype.enterDetails =function(){
    common.getElementByNameAndType(firstName, chance.first());
    //element(by.name(firstName)).sendKeys(chance.first());
    element(by.name(lastName)).sendKeys(chance.last());
    element(by.name(latestDegree)).click();
    element(by.cssContainingText('option', 'JD')).click();
    element(by.name(university)).sendKeys('Northwestern University');
    element(by.name(currentEmployer)).sendKeys('Somebody');
    element(by.name(jobTitle)).sendKeys('Something');
    element(by.name(annualIncome)).sendKeys('70000');
    element(by.name(savingsInvestmentTotal)).sendKeys('5000');
    element(by.name(refinanceAmount)).sendKeys('25000');
    element(by.name(street)).sendKeys('123 Orion Belt');
    element(by.name(city)).sendKeys('Pasadena');
    element(by.name(state)).click();
    element(by.cssContainingText('option', 'California')).click();
    element(by.name(zipCode)).sendKeys('12345');
    element(by.css(citizenshipStatus)).click();
};

CheckRatePage.prototype.createAccount = function(){
    element(by.name(email)).sendKeys(chance.email({domain: 'example.com'}));
    element(by.name(password)).sendKeys('Password1!');
};

CheckRatePage.prototype.consentToSoftInquiry = function(){
    element(by.name(ssn1)).sendKeys('123');
    element(by.name(ssn2)).sendKeys('34');
    element(by.name(ssn3)).sendKeys('5678');
    element(by.css(termsOfService)).click();
};

CheckRatePage.prototype.submit = function(){
    return element(by.css(getYourRateButton)).click();
};

CheckRatePage.prototype.submitCheckRateForm = function(){
    this.enterDetails();
    this.createAccount();
    this.consentToSoftInquiry();
    return this.submit()
        .then(function(){
            //because it is a hard redirect, we need to tell protractor to chill for a second
            return browser.sleep(1500);
        });
};

module.exports = CheckRatePage;
