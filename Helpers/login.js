module.exports = {
    foo: 'bar',
    login: function() {
        browser.driver.get('https://triage.opal.nyk.learningwell.se/');
        browser.driver.manage().window().maximize();
        browser.driver.findElement(by.name('username')).sendKeys('lw-psg');
        browser.driver.findElement(by.name('password')).sendKeys('inVent15');

        browser.driver.findElement(by.css('.btn-block')).click();
    },

    startPage: function() {
        browser.driver.get('https://triage.opal.nyk.learningwell.se/');
    }
};