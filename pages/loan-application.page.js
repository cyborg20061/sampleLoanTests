var common = require('../common/common-methods.js');

var LoanApplicationPage = function () {
};

var URL = 'https://localhost:9000/student/#/profile/start';
var primaryButton = '.primary-button-with-arrow';
var startmonth = 'startmonth';
var startyear = 'startyear';


LoanApplicationPage.verifyOnLoanApplicationPage = function () {
    expect(browser.getCurrentUrl()).toEqual(URL);
};

LoanApplicationPage.prototype.continueToLoanApplication = function () {
    element(by.css('.skip-linkedin')).click();
    common.waitForElement(by.name('education_form'));
};

LoanApplicationPage.prototype.startLoanApplication = function () {
    expect(browser.getCurrentUrl()).toEqual(URL);
    this.continueToLoanApplication();
};

LoanApplicationPage.prototype.enterEducationInformationAndContinue = function () {
    element(by.name('field_of_study')).sendKeys('Law');
    element(by.name(startmonth)).sendKeys('10');
    element(by.name(startyear)).sendKeys('2012');
    element(by.name('endmonth')).sendKeys('05');
    element(by.name('endyear')).sendKeys('2015');
    element(by.id('gpa')).sendKeys('3.9');
    element(by.id('gpa_max')).sendKeys('4.0');
    element(by.css(primaryButton)).click();
};

LoanApplicationPage.prototype.enterEmploymentHistoryAndContinue = function () {
    element(by.name(startmonth)).sendKeys('05');
    element(by.name(startyear)).sendKeys('2012');
    common.clickCheckboxOption('No');
    element(by.cssContainingText('option', 'Full-Time Employee')).click();
    element(by.name('state')).click();
    element(by.cssContainingText('option', 'California')).click();
    element(by.name('city')).sendKeys('Pasadena');
    element(by.css(primaryButton)).click();
};

LoanApplicationPage.prototype.enterFinancialAccountsAndContinue = function () {
    element(by.id('search-input')).sendKeys('CCBank-Beacon');
    common.waitForElement(By.css('.icon-icon-arrow-right-grey'));
    element(by.css('.icon-icon-arrow-right-grey')).click();
    element(by.name('Banking Userid')).sendKeys('user');
    element(by.name('Banking Password')).sendKeys('password');
    element(by.css('.primary-button')).click();
    common.waitForElement(By.css('.alert-message'));
    element(by.name('value')).sendKeys('100000');
    common.clickCheckboxOption('No');
    element(by.css(primaryButton)).click();
};

LoanApplicationPage.prototype.enterPersonalDetailsAndContinue = function () {
    element(by.name('MM')).sendKeys('01');
    element(by.name('DD')).sendKeys('01');
    element(by.name('YYYY')).sendKeys('1985');
    element(by.name('mobile_number1')).sendKeys('123');
    element(by.name('mobile_number2')).sendKeys('456');
    element(by.name('mobile_number3')).sendKeys('7890');
    element(by.name('citizenship_status')).click();
    element(by.cssContainingText('option', 'None of the Above')).click();
    element(by.name('citizenship-status-explanation')).sendKeys('other')
    common.clickCheckboxOption('Yes');
    element(by.name('living_situation')).click();
    element(by.cssContainingText('option', 'I rent')).click();
    element(by.name('monthly_rent')).sendKeys('2500');
    element(by.name('number_of_dependents')).sendKeys('0');
    element(by.css('.checkbox-list')).click();
    element(by.css(primaryButton)).click();
};

module.exports = LoanApplicationPage;
