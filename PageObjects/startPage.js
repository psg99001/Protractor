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
    SOURCESWIDGETTITLE:{ get: function() { return  'SOURCES';  }},

    title: { get: function() { return browser.getTitle(); }},
    disWindowLeftMenu: { get: function() { return  element.all(by.css('.fa-2-5x')).first();  }},
    maximizeWidget: { get: function() { return  element(by.css('.fa-caret-square-o-down'));  }},
    widgetsRepeater: { get: function() { return  element.all(by.repeater('widget in widgets'));  }},
    itemInWidgetHeader: { get: function() { return  element(by.css('[class="source-selector-item-header"]'));  }},
    itemInWidget: { get: function() { return  element(by.css('[class="widget-item-frame source-selector-item ng-scope"]'));  }},
    logoutLeftMenu: { get: function() { return  element.all(by.css('[title="Log Out (F2)"]')).first();  }},
    logoutConfirm: { get: function() { return  element.all(by.css('[ng-click="logout()"]')).first();  }},
    logoutCancel: { get: function() { return  element.all(by.css('[ng-click="toggleLogout()"]')).first();  }},
    disWindowClose: { get: function() { return  element(by.css('[title="Close disseminationLog (Ctrl + Q)"]'));  }},
    sourcesTitle: {get: function() {return element(by.css('[class="title-bar-text gridster-handle ng-binding"]')); }},
    analysisTool: { get: function() { return  element(by.css('[title="Analysis Tool (A)"]'));  }},
    systemManagement: { get: function() { return  element(by.css('[title="System Management (S)"]'));  }},
    help: { get: function() { return  element(by.css('[title="Help (F1)"]'));  }}

});

module.exports = StartPage;