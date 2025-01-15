const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should add rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should subtract rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
            expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
        });
    });

    describe('DIVIDE operation', () => {
        it('should divide rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
            expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
        });

        it('should return Error when dividing by zero', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 1.2, 0.2)).to.equal('Error');
        });
    });
});
