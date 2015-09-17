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

    it('testing more', function() {
        element.all(by.css('[ng-click="toggleCollapseWidget(widget)"]')).first().click();
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

});
