const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should add rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should subtract rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.7), 2);
        });
    });

    describe('DIVIDE operation', () => {
        it('should divide rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
            assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
        });

        it('should return Error when dividing by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.2), 'Error');
        });
    });
});
