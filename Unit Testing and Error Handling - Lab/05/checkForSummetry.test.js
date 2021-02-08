const { expect } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('isSymmetric', () => {
    it('returns true for valid simmetric input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('returns false for non-valid simmetric input', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });

    it('returns false for invalid input', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns false for type-coerect elements', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    });

    //test overloading
    it('returns true for valid simmetric odd-element array', () => {
        expect(isSymmetric([1, 1, 1])).to.be.true;
    });

    it('returns true for valid simmetric string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });

    it('returns false for valid non-simmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });
});