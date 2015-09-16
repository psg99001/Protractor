/**
 * Created by petersandberg on 15-09-16.
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
        loginPage.typeUsername('lw-psg');
        loginPage.typePassword('inVent15');
        loginPage.login();

        startPage = new StartPage();

    });

    it('Remove disiminationWindow', function() {
        console.log('hej hopp');
        browser.sleep(2000);
        startPage.disWindowClose.isPresent().then(function(result){
           if(result){
                startPage.disWindowClose.click();
           }
            else{

           }
        });

        startPage.disWindowLeftMenu.click();
        expect(startPage.disWindowClose.isPresent()).toBe(true);

        startPage.disWindowClose.click();
        expect(startPage.disWindowClose.isPresent()).toBe(false);
    });




});