let expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe("Check for undefined", function () {
    it('should return undefined', function () {
        expect(isOddOrEven(15)).to.be.equal(undefined);
    });

    it('should return undefined', function () {
        expect(isOddOrEven({name: "Pesho"})).to.be.equal(undefined);
    });

    it('should return undefined', function () {
        expect(isOddOrEven()).to.be.equal(undefined);
    });
});

describe("Check for correct return", function () {
    describe("Check for even", function () {
        it('should return even', function () {
            expect(isOddOrEven("name")).to.be.equal("even");
        });

        it('should return even', function () {
            expect(isOddOrEven("name of name")).to.be.equal("even");
        });

        it('should return even', function () {
            expect(isOddOrEven("")).to.be.equal("even");
        });
    });

    describe("Check for odd", function () {
        it('should return odd', function () {
            expect(isOddOrEven("name of the dog")).to.be.equal("odd");
        });

        it('should return odd', function () {
            expect(isOddOrEven("a")).to.be.equal("odd");
        });
    });
});