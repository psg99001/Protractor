/**
 * Created by petersandberg on 15-09-16.
 */

'use strict';

var LoginPage = require('../PageObjects/loginPage.js');
var StartPage = require('../PageObjects/startPage.js');
describe('testing', function() {
    var loginPage;
    var startPage;

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        loginPage = new LoginPage();
        loginPage.typeUsername('lw-psg');
        loginPage.typePassword('inVent15');
        loginPage.login();

        startPage = new StartPage();

    });

    it('Remove disiminationWindow', function () {
        console.log('hej hopp');
        browser.sleep(2000);
        startPage.disWindowClose.isPresent().then(function (result) {
            if (result) {
                startPage.disWindowClose.click();
            }
            else {

            }
        });

        startPage.disWindowLeftMenu.click();
        expect(startPage.disWindowClose.isPresent()).toBe(true);

        startPage.disWindowClose.click();
        expect(startPage.disWindowClose.isPresent()).toBe(false);
    });

    it('Click analyze tab, sb is opened', function () {
        //Setup
        startPage.analysisTool.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                //new window is opened
                expect(handles.length).toEqual(2);

                browser.switchTo().window(handles[1]).then(function () {
                    browser.sleep(1000);
                    expect(browser.getCurrentUrl()).toContain(startPage.ANALYZELINK);
                });
            });
        });
    });

    it('Click system management, sm is opened', function () {
        //Setup
        startPage.systemManagement.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                //new window is opened
                expect(handles.length).toEqual(2);

                browser.switchTo().window(handles[1]).then(function () {
                    browser.sleep(1000);
                    expect(browser.getCurrentUrl()).toContain(startPage.SYSTEMMANAGEMENTLINK);
                });
            });
        });
    });

    it('Click help,help link is opened', function () {
        //Setup
        startPage.help.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                //new window is opened
                expect(handles.length).toEqual(2);

                browser.switchTo().window(handles[1]).then(function () {
                    browser.sleep(1000);
                    expect(browser.getCurrentUrl()).toContain(startPage.HELPLINK);
                });
            });
        });
    });

    it('logout and confirm', function () {
        //Setup
        startPage.logoutLeftMenu.click();
        startPage.logoutConfirm.click();
        expect(startPage.title).toBe('Login');

    });

    it('logout and cancel', function () {
        //Setup
        startPage.logoutLeftMenu.click();
        startPage.logoutCancel.click();
        expect(startPage.title).toBe('Triage');

    });
});
