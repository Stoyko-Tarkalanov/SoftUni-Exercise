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

        it('add props', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(-5), 0);
            assert.equal(mathEnforcer.addFive(1.2), 6.2);
            assert.equal(mathEnforcer.addFive(1), 6);
        });
    });

    describe('subtract', () => {
        it('params isNaN', () => {
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
            assert.isUndefined(mathEnforcer.subtractTen('a'), 'param is string');
        });

        it('subtract prop', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.closeTo(mathEnforcer.subtractTen(10.2), 0.2, 0.1);
            assert.equal(mathEnforcer.subtractTen(1), -9);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        });
    });

    describe('sum', () => {
        it('', () => {
            assert.isUndefined(mathEnforcer.sum('1', 1));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        });

        it('', () => {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(1, -1), 0);
            assert.equal(mathEnforcer.sum(1, 0), 1);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5);
            assert.closeTo(mathEnforcer.sum(1.3, -1.2), 0.1, 0.1);
        });
    });
});