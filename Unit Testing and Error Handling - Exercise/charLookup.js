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

describe('charLookup', () => {
    it('isUndefined', () => {
        assert.isUndefined(lookupChar(1, 1));
        assert.isUndefined(lookupChar('text', 1.2));
        assert.isUndefined(lookupChar('text', 'text'));
        assert.isUndefined(lookupChar(2, 'text'));
    });

    it('invalid index', () => {
        assert.equal(lookupChar('text', -1), 'Incorrect index');
        assert.equal(lookupChar('text', 8), 'Incorrect index');
    });

    it('should return "l" on lookupChar("hello", 3)', () => {
        assert.equal(lookupChar('hello', 3), 'l');
    });
});