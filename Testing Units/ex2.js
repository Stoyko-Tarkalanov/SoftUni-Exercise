const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('IsOddEven Function', () => {
    it('return undefined', () => {
        assert.equal(isOddOrEven(4), undefined);
        assert.equal(isOddOrEven(false), undefined);
    });

    it('retun even', () => {
        assert.equal(isOddOrEven('task'), 'even');
    });

    it('return odd', () => {
        assert.equal(isOddOrEven('add'), 'odd');
    });
});