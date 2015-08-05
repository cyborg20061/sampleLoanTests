/*jshint node:true */
exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    allScriptsTimeout: 11000,
    specs: [
        '../*spec.js'
    ],
    maxSessions: -1,
    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }],
    //baseUrl: 'http://localhost:9000',
    baseUrl: 'http://www.staging.meetearnest.com',
    rootElement: 'div',
    onPrepare: function() {},
    onCleanUp: function() {}
};
