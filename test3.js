/**
 * Created by petersandberg on 15-09-07.
 */
//testing
beforeEach(function() {
//browser.ignoreSynchronization = true;
});

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {

        browser.driver.get('https://triage.opal.nyk.learningwell.se/');
        browser.driver.findElement(by.name('username')).sendKeys('lw-psg');
        browser.driver.findElement(by.name('password')).sendKeys('inVent15');

        browser.driver.findElement(by.css('.btn-block')).click();

    });
});
