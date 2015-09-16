/**
 * Created by petersandberg on 15-09-15.
 */
'use strict';

var LoginPage = function () {
    browser.get('https://triage.opal.nyk.learningwell.se/');

};

LoginPage.prototype = Object.create({}, {
    AUTHFAILTEXT: { get: function() { return 'Authorization failed! No such user or wrong password.'; }},
    title: { get: function() { return browser.getTitle(); }},
    authFail: { get: function() { return browser.driver.findElement(by.id('auth-alert')); }},
    username: { get: function() { return browser.driver.findElement(by.name('username')); }},
    password: { get: function() { return browser.driver.findElement(by.name('password')); }},
    loginButton: { get: function() { return browser.driver.findElement(by.css('.btn-block')); }},

    typeUsername: {value: function(keys) { return this.username.sendKeys(keys)}},
    typePassword: {value: function(keys) { return this.password.sendKeys(keys)}},

    login: { value: function() {
        this.loginButton.click();
    }}
});

module.exports = LoginPage;