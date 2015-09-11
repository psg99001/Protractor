/**
 * Created by petersandberg on 15-09-07.
 */
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
            savePath: '/var/lib/jenkins/jobs/TestsProtractor/workspace',
            filePrefix: 'xmloutput'
        }));
    },
    asdasd
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../expandAndCollapseAllWidgets.js']
};


/Users/petersandberg/WebstormProjects/untitled1/Configuration/conf.js