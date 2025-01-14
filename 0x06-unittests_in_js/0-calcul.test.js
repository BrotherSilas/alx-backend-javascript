const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
        assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
    });

    it('should handle zero', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
        assert.strictEqual(calculateNumber(0.1, 0.2), 0);
        assert.strictEqual(calculateNumber(0.8, 0.9), 2);
    });
});
