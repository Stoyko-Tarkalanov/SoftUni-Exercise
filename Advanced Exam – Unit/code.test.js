const describe = require('mocha').describe;
const assert = require('chai').assert;
const numberOperations = require('./code'); // Name

describe("Tests …", function () {
    describe("powNumber", function () {
        it("TODO …", function () {
            assert.equal(numberOperations.powNumber(2), 4);
        });
    });

    describe("numberChecker", function () {
        it("TODO …", function () {
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('true'), 'The input is not a number!');
            assert.equal(numberOperations.numberChecker(66), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(888), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });
    });

    describe("sumArrays", function () {
        it("TODO …", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3, 4], [1, 2, 3]), [2, 4, 6, 4]);
        });
    });
});
