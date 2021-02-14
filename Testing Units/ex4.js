const describe = require('mocha').describe;
const assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('add', () => {
        it('args are NaN', () => {
            assert.isUndefined(mathEnforcer.addFive('s'));
            assert.isUndefined(mathEnforcer.addFive(undefined));
        });

        it('args are Number', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
            assert.equal(mathEnforcer.addFive(0), 5);
        });
    });

    describe('subtract', () => {
        it('parameter is NOT a number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('asd'));
            assert.isUndefined(mathEnforcer.subtractTen(true));
        });

        it('parameter is a number, subtract 10 ', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
            assert.equal(mathEnforcer.subtractTen(20.2), 10.2);
        });
    });

    describe('sum', () => {
        it('any of the 2 parameters is NOT a number', () => {
            assert.isUndefined(mathEnforcer.sum(1, 'asd'));
            assert.isUndefined(mathEnforcer.sum('asd', 1));
            assert.isUndefined(mathEnforcer.sum(true, 1));
            assert.isUndefined(mathEnforcer.sum(1, true));
        });

        it('both parameters are numbers', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(2, 2), 4);
        });
    });
});