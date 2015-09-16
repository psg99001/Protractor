/**
 * Created by petersandberg on 15-09-15.
 */
'use strict';

var StartPage = function() {
};

StartPage.prototype = Object.create({}, {

    title: { get: function() { return browser.getTitle(); }},
    disWindowLeftMenu: { get: function() { return  element.all(by.css('.fa-2-5x')).first();  }},
    disWindowClose: { get: function() { return  element(by.css('[title="Close disseminationLog (Ctrl + Q)"]'));  }},
});

module.exports = StartPage;