let expect = require("chai").expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("Testing Char lookup", function () {
    describe("Return undefined", function () {
        it('with not a string, should return undefined', function () {
            expect(lookupChar(1, 2)).to.be.equal(undefined);

        });

        it('with object as string, should return undefined', function () {
            expect(lookupChar({a: "b"}, 9)).to.be.equal(undefined);

        });

        it('with not a number as index, should return undefined', function () {
            expect(lookupChar("abc", "def")).to.be.equal(undefined);

        });

        it('with a float as index, should return undefined', function () {
            expect(lookupChar("abc", 3.3)).to.be.equal(undefined);

        });
    });

    describe("Return incorrect index", function () {
        it('with a bigger index, should return Incorrect index', function () {
            expect(lookupChar("abc", 6)).to.be.equal("Incorrect index");

        });

        it('with a smaller index, should return Incorrect index', function () {
            expect(lookupChar("abc", -3)).to.be.equal("Incorrect index");

        });
    });

    describe("Return correct char", function () {
        it('should return b', function () {
            expect(lookupChar("abc", 1)).to.be.equal("b");

        });
    });
});