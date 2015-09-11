/**
 * Created by petersandberg on 15-09-07.
 */

describe('Login to Opal', function() {
    it('', function() {
        browser.driver.get('https://triage.opal.nyk.learningwell.se/');
        browser.driver.findElement(by.name('username')).sendKeys('lw-psg1');
        browser.driver.findElement(by.name('password')).sendKeys('sdsdf');

        browser.driver.findElement(by.css('.btn-block')).click();

        expect()
    });
});