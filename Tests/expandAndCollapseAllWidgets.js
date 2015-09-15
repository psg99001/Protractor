/**
 * Created by petersandberg on 15-09-07.
 */
describe('Correct number of widgets', function() {

    var fs = require('fs');

    beforeEach(function() {
        var helper = require('./../Helpers/login.js');
        helper.login();
        browser.sleep(100);
    });

    afterEach(function() {
        browser.ignoreSynchronization = false;
        browser.sleep(200);
    });

    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }


    it('Pressing X on diseminiation window should remove it', function() {
        //Setup
        element(by.css('.fa-2-5x')).click();

        //Kill disemnitation window
        element(by.css('i.fa-times.fa.widget-hover')).click();

        //Disimination window is no longer present
        expect(element(by.css('i.fa-times.fa.widget-hover')).isPresent()).toBe(false);

    });


    it('expand sources and sources are listed', function() {
        //Setup
        element(by.css('.fa-caret-square-o-up')).isPresent().then(function(result){
           if(result){
               element(by.css('.fa-caret-square-o-up')).click();
               browser.sleep(100);
               element(by.css('.fa-caret-square-o-down')).click();
               browser.sleep(100);
               var test = element.all(by.repeater('source in (widget.extra.isCollapsed() ? null : sources)'));
               expect(test.count()).toBeGreaterThan(0);
           }
            else{
               element(by.css('.fa-caret-square-o-down')).click();
               browser.sleep(100);
               var test = element.all(by.repeater('source in (widget.extra.isCollapsed() ? null : sources)'));
               expect(test.count()).toBeGreaterThan(0);
           }
        });
    });

    it('doubleclick source item, new widget with that item', function() {
        //Setup

        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'start.png');
        });

        element(by.css('.fa-caret-square-o-down')).isPresent().then(function(result) {
            if (result) {
                element(by.css('.fa-caret-square-o-down')).click();
            }
        });
                                    //html body.ng-scope.body-image div.desktop.ng-scope div.ng-scope.gridster.gridster-desktop.gridster-loaded ul li.widget.ng-scope.gridster-item.active div.source-selector ul.widget-content.source-selector-list.widget-transparency li.ng-scope div.widget-item-frame.source-selector-item.ng-scope.active
        var firstElementInSource = "/html/body/div[2]/div/ul/li[1]/div[1]/ul/li[2]/div/";


        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'afterdown.png');
        });

        //double click on first item
        var clickedElement = element(by.css(firstElementInSource));
        browser.actions().doubleClick(element(by.xpath(firstElementInSource))).perform();

        //get the last widget, and verify that it is the same that previously was doubleClicked.
        var elm = element.all(by.repeater('widget in widgets')).last();

        expect(elm.getText()).toContain(clickedElement.getText());




    });

    it('collapse sources and nothing is listed', function() {
        //Setup
        element(by.css('.fa-caret-square-o-down')).isPresent().then(function(result){
            if(result){
                element(by.css('.fa-caret-square-o-down')).click();
                browser.sleep(100);
                element(by.css('.fa-caret-square-o-up')).click();
                browser.sleep(100);
                var test = element.all(by.repeater('source in (widget.extra.isCollapsed() ? null : sources)'));
                expect(test.count()).toEqual(0);
            }
            else{
                element(by.css('.fa-caret-square-o-up')).click();
                browser.sleep(100);
                var test = element.all(by.repeater('source in (widget.extra.isCollapsed() ? null : sources)'));
                expect(test.count()).toEqual(0);
            }
        });
    });

    it('Click analyze tab, triage is opened', function() {
        //Setup
        var firstElementInSource = "html body.ng-scope div.main-menu.ng-scope ul.ng-scope.icon-menu-color-05 li i.fa.fa-line-chart.fa-2-5x";

        element(by.css(firstElementInSource)).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).toEqual(2);
                newWindowHandle = handles[1]; // this is your new window

                browser.switchTo().window(newWindowHandle).then(function () {
                    browser.sleep(1000);
                    expect(browser.getCurrentUrl()).toContain('https://analyze.opal.nyk.learningwell.se/Refactor/');
                });
            });
        });

    });

    it('Click System Management, System Management is opened', function() {
        //Setup
        var firstElementInSource = "html body.ng-scope div.main-menu.ng-scope ul.ng-scope.icon-menu-color-05 li.ng-scope i.fa.fa-cog.fa-3x";

        element(by.css(firstElementInSource)).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).toEqual(2);
                newWindowHandle = handles[1]; // this is your new window

                browser.switchTo().window(newWindowHandle).then(function () {
                    browser.sleep(1000);
                    expect(browser.getCurrentUrl()).toContain('https://triage.opal.nyk.learningwell.se/system-management/app/index.html');
                });

                browser.switchTo().window(handles[0]);
            });

        });

    });

    it('Click Manual link, manual is opened', function() {
        //Setup
        var firstElementInSource = "html body.ng-scope div.main-menu.ng-scope ul.ng-scope.icon-menu-color-05 li i.fa.fa-question-circle.fa-3x";


        element(by.css(firstElementInSource)).click().then(function () {
            browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).toEqual(2);
                newWindowHandle = handles[1]; // this is your new window

                browser.ignoreSynchronization = true;
                browser.switchTo().window(newWindowHandle).then(function () {
                    browser.sleep(1000);
                    expect(browser.getCurrentUrl()).toContain('https://triage.opal.nyk.learningwell.se/user-manual/user-manual.html');

                });
            });
        });

    });
});
