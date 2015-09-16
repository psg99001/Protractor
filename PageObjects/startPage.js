/**
 * Created by petersandberg on 15-09-15.
 */
'use strict';

var StartPage = function() {
};

StartPage.prototype = Object.create({}, {

    ANALYZELINK: {get: function() {return 'https://analyze.opal.nyk.learningwell.se/Refactor/';}},
    SYSTEMMANAGEMENTLINK: {get: function() {return 'https://triage.opal.nyk.learningwell.se/system-management/app/index.html';}},
    HELPLINK: {get: function() {return 'https://triage.opal.nyk.learningwell.se/user-manual/user-manual.html';}},

    title: { get: function() { return browser.getTitle(); }},
    disWindowLeftMenu: { get: function() { return  element.all(by.css('.fa-2-5x')).first();  }},
    disWindowClose: { get: function() { return  element(by.css('[title="Close disseminationLog (Ctrl + Q)"]'));  }},
    analysisTool: { get: function() { return  element(by.css('[title="Analysis Tool (A)"]'));  }},
    systemManagement: { get: function() { return  element(by.css('[title="System Management (S)"]'));  }},
    help: { get: function() { return  element(by.css('[title="Help (F1)"]'));  }}

});

module.exports = StartPage;