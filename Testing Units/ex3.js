const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('LookupChar', () => {
    it('Return undefined', () => {
        assert.equal(lookupChar(4, 4), undefined);
        assert.equal(lookupChar(true, 4), undefined);
        assert.equal(lookupChar('asd', 'asd'), undefined);
        assert.equal(lookupChar('asd', true), undefined);
    });

    it('Correct input, incorect INX', () => {
        assert.equal(lookupChar('asd', 6), 'Incorrect index');
        assert.equal(lookupChar('asd', 3), 'Incorrect index');
        assert.equal(lookupChar('asd', -3), 'Incorrect index');
    });

    it('Correct params values', () => {
        assert.equal(lookupChar('asd', 2), 'd');
    });
});