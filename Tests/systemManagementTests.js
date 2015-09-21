/**
 * Created by petersandberg on 15-09-18.
 */

'use strict';

var LoginPage = require('../PageObjects/loginPage.js');
var StartPage = require('../PageObjects/startPage.js');
var SystemManagementPage = require('../PageObjects/systemManagementPage.js');

describe('testing', function() {
    var loginPage;
    var startPage;
    var systemManagementPage;

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        loginPage = new LoginPage();
        loginPage.typeUsername('lw-psg');
        loginPage.typePassword('inVent15');
        loginPage.login();

        startPage = new StartPage();

        startPage.systemManagement.click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                //new window is opened

                browser.switchTo().window(handles[1]).then(function () {
                    browser.sleep(2000);
                });
            });
        });
        systemManagementPage = new SystemManagementPage();

    });

    it('Adding new source (needs to fix this tc later)', function() {

        element.all(by.repeater('source in sources')).filter(function (elem, index) {
           return elem.getText().then(function(text) {
              return text === 'asjkdsad\nAdapter: CONFIGURABLE-MAIL-ADAPTER';
           });

        }).then(function(filteredElements) {
            console.log(filteredElements.length);
            if(filteredElements.length > 0) {
                filteredElements[0].element(by.css('[class="fa fa-trash ng-scope"]')).click().then(function() {
                    browser.sleep(3000).then(function() {
                        element(by.css('[class="btn btn-success ng-binding"]')).click();
                    });
                });
            }

            });

        systemManagementPage.createNewSource.click();
        systemManagementPage.typeSourceName('asjkdsad');
        systemManagementPage.btnDoneSource.click();
    });

});