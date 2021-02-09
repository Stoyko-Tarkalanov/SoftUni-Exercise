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

describe('Check isEvenOrOdd Function', () => {
    it('retuns undefined with invalid arguments', () => {
        assert.equal(undefined, isOddOrEven(6));
        assert.equal(undefined, isOddOrEven(true));
    });

    it('retuns even with valid argument', () => {
        assert.equal('even', isOddOrEven('some'));
    });

    it('retuns odd with valid argument', () => {
        assert.equal('odd', isOddOrEven('one'));
    });

    // it('retuns correct result with valid argument', () => {
    //     assert.equal('even', isOddOrEven('some'));
    //     assert.equal('odd', isOddOrEven('one'));
    // });
});