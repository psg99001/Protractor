/**
 * Created by petersandberg on 15-09-07.
 */
//test
exports.config = {
    framework : 'jasmine2',
    restartBrowserBetweenTests: true,
    capabilities: {
        'browserName': 'firefox'
    },
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: '',
            filePrefix: 'xmloutput'
        }));
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Tests/startTests.js',
            '../Tests/login.js']
};

