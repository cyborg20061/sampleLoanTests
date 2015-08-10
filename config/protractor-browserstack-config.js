/*jshint node:true */
exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        '../*spec.js'
    ],
    maxSessions: -1,
    capabilities: {
        'browserName': 'chrome',
        'browserstack.user' : 'meaghanlewis1',
        'browserstack.key' : 'xEk41pvaHNyFf4BdjCxu',
        'browserstack.local' : 'true',
        'browserstack.debug' : 'true'
    },
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    //baseUrl: 'http://localhost:9000',
    baseUrl: 'http://www.staging.meetearnest.com',
    rootElement: 'div',
    onPrepare: function() {},
    onCleanUp: function() {}
};
