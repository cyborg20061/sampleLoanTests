module.exports = {
    getBrowserLogs: function(browser){
        browser.manage().logs().get('browser').then(function(browserLog) {
            console.log('log: ' + require('util').inspect(browserLog));
        });
    },
    configureUrl: function(ptor, path){
        return url.resolve(ptor.baseUrl, path);
    },
    pauseTests: function(browser){
        return browser.pause();
    },
    getElementByName: function (locator){
    return element(by.name(locator));
    },
    getElementByNameAndType: function (locator, text) {
        return element(by.name(locator)).sendKeys(text);
    },
    getElementById: function(locator){
        return element(by.id(locator));
    },
    getElementByIdAndType: function (locator, text) {
        return element(by.id(locator)).sendKeys(text);
    },
};


