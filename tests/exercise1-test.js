import assert from 'assert';
import { printNumbers } from './../exercises/exercise1.js';

describe('printNumbers Tests:', () => {

    let arrayValues = printNumbers(1, 100);

    it('Must return a number when the number is not divisible by 3 and/or 5', () => {
        assert.strictEqual(arrayValues[0], 1);
        assert.strictEqual(arrayValues[18], 19);
        assert.strictEqual(arrayValues[33], 34);
    });

    it('Must return word Visual when the number is divisible by 3', () => {
        assert.strictEqual(arrayValues[2], 'Visual');
        assert.strictEqual(arrayValues[5], 'Visual');
        assert.strictEqual(arrayValues[8], 'Visual');
    });

    it('Must return word Nuts when the number is divisible by 5', () => {
        assert.strictEqual(arrayValues[4], 'Nuts');
        assert.strictEqual(arrayValues[24], 'Nuts');
        assert.strictEqual(arrayValues[34], 'Nuts');
    });

    it('Must return phrase Visual Nuts when the number is divisible by 3 and 5', () => {
        assert.strictEqual(arrayValues[14], 'Visual Nuts');
        assert.strictEqual(arrayValues[44], 'Visual Nuts');
        assert.strictEqual(arrayValues[89], 'Visual Nuts');
    });

    it('Must return 100 elements', () => {
        assert.strictEqual(arrayValues.length, 100);
    });

    it('Must return 500 elements', () => {
        arrayValues.length = 0
        arrayValues = printNumbers(1, 500);
        assert.strictEqual(arrayValues.length, 500);
    });
});