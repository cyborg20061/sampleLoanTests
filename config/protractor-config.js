/*jshint node:true */
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    suites: {
        checkRate: '../check-rate-spec.js'
    },
    maxSessions: -1,
    capabilities: {
        browserName: 'chrome',
        count: 1,
        shardTestFiles: false,
        maxInstances: 1
    },
    multiCapabilities: [],
    baseUrl: 'http://localhost:9000',
    //baseUrl: 'http://www.staging.meetearnest.com',
    rootElement: 'div',
    onPrepare: function() {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './screenshots'
        }));
    },
    onCleanUp: function() {}
};
