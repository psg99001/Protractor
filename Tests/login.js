/**
 * Created by petersandberg on 15-09-15.
 */

'use strict';

var LoginPage = require('../PageObjects/loginPage.js');
var StartPage = require('../PageObjects/startPage.js');
describe('testing', function() {
    var loginPage;
    var startPage;

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        loginPage = new LoginPage();
        startPage = new StartPage();

    });

    it('login correctly', function() {
        loginPage.typeUsername('lw-psg');
        loginPage.typePassword('inVent15');
        loginPage.login();

        //We should have reached startpage

        expect(startPage.title).toBe('Triage');
    });

    it('Wrong password', function() {
        loginPage.typeUsername('lw-psg');
        loginPage.typePassword('inVewernt15');
        loginPage.login();

        //We should have reached startpage
        expect(startPage.title).toBe('Login');
        expect(loginPage.authFail.getText()).toBe(loginPage.AUTHFAILTEXT);
    });


});
