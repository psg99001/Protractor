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





    it('open source item', function() {

        element(by.css('.fa-caret-square-o-down')).isPresent().then(function (result) {
            if (result) {
                element(by.css('.fa-caret-square-o-down')).click();
            }
        });

        browser.sleep(2000).then(function () {
        });

        browser.wait(element(by.css('[class="widget-item-frame source-selector-item ng-scope"]')).isDisplayed().then(function (result) {
            var clickedElement = element(by.css('[class="widget-item-frame source-selector-item ng-scope"]'));
            browser.actions().doubleClick(clickedElement).perform().then(function (result) {
                var elm = element.all(by.repeater('widget in widgets')).last();
                expect(elm.getText()).toContain(element(by.css('[class="source-selector-item-header"]')).getText());
            });

        })).then(function(result1) {
            element(by.css('[ng-click="close()"]')).click();
        });
    });



  /*  it('doubleclick source item, new widget with that item', function() {
        //Setup


        element(by.css('.fa-caret-square-o-down')).isPresent().then(function(result) {
            if (result) {
                element(by.css('.fa-caret-square-o-down')).click();
            }
        });

        var firstElementInSource = "/html/body/div[2]/div/ul/li[1]/div[1]/ul/li[2]/div";


        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'afterdown.png');
        });

        //double click on first item
        var clickedElement = element(by.xpath(firstElementInSource));
        browser.actions().doubleClick(element(by.xpath(firstElementInSource))).perform();

        //get the last widget, and verify that it is the same that previously was doubleClicked.
        var elm = element.all(by.repeater('widget in widgets')).last();

        expect(elm.getText()).toContain(clickedElement.getText());

    });*/

/*

    it('expand widget', function() {
        //Setup
        browser.sleep(1000);
        //browser.actions().doubleClick(element(by.css('[ ng-controller="SourceSelectorWidgetCtrl"]'))).perform();
        // var elements = element.all(by.repeater('widget in widgets'));
        // var elements = element.all(by.css('[ng-click="toggleCollapseWidget(widget)"]'));


        element.all(by.css('[ng-click="toggleCollapseWidget(widget)"]')).then(function (items) {
            console.log(items.length);

            for (var i = 0; i < items.length; i++) {
             //   expect(items[i].getOuterHtml()).toContain('fa widget-hover fa-caret-square-o-up');

                expect((items[i].getOuterHtml()).toContain('fa widget-hover fa-caret-square-o-down')).then(function (test) {
                    if(test){
                        console.log('true');
                    }
                    else{
                        console.log('false');
                    }
                });
            }

        });

    });  */
      // var test = element.all(by.repeater('source in (widget.extra.isCollapsed() ? null : sources)'));
       // expect(test.count()).toBeGreaterThan(0);

       /* console.log(elements.length);
        for(var i=0; i < elements.length; i++) {
            console.log('number '+i);
            elements[i].click();
        }
        //element.all(by.css('[ng-click="toggleCollapseWidget(widget)"]')).last().click();

       /* elements.first().then(function(test) {
            //console.log(test.length);
            console.log('testing aag');
            /*test.findElement(by.css('[ng-click="toggleCollapseWidget(widget)"]')).then(function (div) {
                console.log('testing aag');
                div.click();
            });
        });

    /*    element.all(by.repeater('widget in widgets')).first().then(function(table) {
          console.log(table.length);
            table.findElement(by.css('[ng-click="toggleCollapseWidget(widget)"]')).then(function(div) {
                console.log('testing again');
                div.click();
            });

        });



     /*

            .isPresent().then(function(result) {
            if (result) {
                element(by.css('.fa-caret-square-o-down')).click();
            }
        });

        var firstElementInSource = "/html/body/div[2]/div/ul/li[1]/div[1]/ul/li[2]/div";


        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'afterdown.png');
        });

        //double click on first item
        var clickedElement = element(by.xpath(firstElementInSource));
        browser.actions().doubleClick(element(by.xpath(firstElementInSource))).perform();

        //get the last widget, and verify that it is the same that previously was doubleClicked.
        var elm = element.all(by.repeater('widget in widgets')).last();

        expect(elm.getText()).toContain(clickedElement.getText());*/


});
