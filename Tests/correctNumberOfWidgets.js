/**
 * Created by petersandberg on 15-09-07.
 */

describe('Correct number of widgets', function() {
    it('', function() {
        var helper = require('./../Helpers/login.js');
        helper.login();

        var test = element.all(by.repeater('widget in widgets'));
        expect(test.count()).toEqual(3);
    });
});