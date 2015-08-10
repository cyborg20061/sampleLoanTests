/*jshint node:true */
var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    allScriptsTimeout: 30000,
    suites: {
        checkRate: '../check-rate-spec.js',
        studentLoanApplication: '../student-loan-application-spec.js'
    },
    maxSessions: -1,
    capabilities: {
        browserName: 'chrome',
        count: 1,
        shardTestFiles: false,
        maxInstances: 1
    },
    multiCapabilities: [],
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 100000,
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    },
    baseUrl: 'https://localhost:9000',
    rootElement: 'div',
    onPrepare: function() {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './screenshots'
        }));
    },
    onCleanUp: function() {}
};
