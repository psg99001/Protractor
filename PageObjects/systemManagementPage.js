/**
 * Created by petersandberg on 15-09-18.
 */
/**
 * Created by petersandberg on 15-09-15.
 */
'use strict';

var SystemManagementPage = function() {
};

SystemManagementPage.prototype = Object.create({}, {

    ANALYZELINK: {get: function() {return 'https://analyze.opal.nyk.learningwell.se/Refactor/';}},
    SYSTEMMANAGEMENTLINK: {get: function() {return 'https://triage.opal.nyk.learningwell.se/system-management/app/index.html';}},
    HELPLINK: {get: function() {return 'https://triage.opal.nyk.learningwell.se/user-manual/user-manual.html';}},
    SOURCESWIDGETTITLE:{ get: function() { return  'SOURCES';  }},

    title: { get: function() { return browser.getTitle(); }},
    createNewSource: { get: function() { return  element(by.css('[ng-click="createNewSource()"]'));  }},
    sourceName: { get: function() { return  element(by.css('[ng-model="newSource.name"]'));  }},
    btnDoneSource: { get: function() { return  element(by.css('[class="btn btn-default done-button"]'));  }},



    typeSourceName: {value: function(keys) { return this.sourceName.sendKeys(keys) }}
});

module.exports = SystemManagementPage;