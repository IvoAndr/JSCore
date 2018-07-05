let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer tests", function () {
    describe("Return undefined", function () {
        describe("addFive should return undefined", function () {
            it('with a string, should return undefined', function () {
                expect(mathEnforcer.addFive("abc")).to.be.equal(undefined);
            });
            it('with a object, should return undefined', function () {
                expect(mathEnforcer.addFive({a: "abc"})).to.be.equal(undefined);
            });
            it('with a null, should return undefined', function () {
                expect(mathEnforcer.addFive(null)).to.be.equal(undefined);
            });
            it('with a empty, should return undefined', function () {
                expect(mathEnforcer.addFive()).to.be.equal(undefined);
            });
        });

        describe("subtractTen should return undefined", function () {
            it('with a string, should return undefined', function () {
                expect(mathEnforcer.subtractTen("abc")).to.be.equal(undefined);
            });
            it('with a object, should return undefined', function () {
                expect(mathEnforcer.subtractTen({a: "abc"})).to.be.equal(undefined);
            });
            it('with a null, should return undefined', function () {
                expect(mathEnforcer.subtractTen(null)).to.be.equal(undefined);
            });
            it('with a empty, should return undefined', function () {
                expect(mathEnforcer.subtractTen()).to.be.equal(undefined);
            });
        });

        describe("sum should return undefined", function () {
            it('with a string, should return undefined', function () {
                expect(mathEnforcer.sum("abc", "def")).to.be.equal(undefined);
            });
            it('with a object, should return undefined', function () {
                expect(mathEnforcer.sum({a: "abc"}, {b: "def"})).to.be.equal(undefined);
            });
            it('with a null, should return undefined', function () {
                expect(mathEnforcer.sum(null, null)).to.be.equal(undefined);
            });
            it('with a empty, should return undefined', function () {
                expect(mathEnforcer.sum()).to.be.equal(undefined);
            });
            it('with a one, should return undefined', function () {
                expect(mathEnforcer.sum(3)).to.be.equal(undefined);
            });
        });
    });

    describe("Return result", function () {
        describe("addFive should return result", function () {
            it('with a 6, should return 11', function () {
                expect(mathEnforcer.addFive(6)).to.be.equal(11);
            });
            it('with a 0, should return 5', function () {
                expect(mathEnforcer.addFive(0)).to.be.equal(5);
            });
            it('with a -3, should return 2', function () {
                expect(mathEnforcer.addFive(-3)).to.be.equal(2);
            });
            it('with a 0.0000001, should return 5.0000001', function () {
                expect(mathEnforcer.addFive(0.0000001)).to.be.equal(5.0000001);
            });
        });

        describe("subtractTen should return result", function () {
            it('with a 6, should return -4', function () {
                expect(mathEnforcer.subtractTen(6)).to.be.equal(-4);
            });
            it('with a 0, should return -10', function () {
                expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
            });
            it('with a -3, should return -13', function () {
                expect(mathEnforcer.subtractTen(-3)).to.be.equal(-13);
            });
            it('with a 0.0000001, should return -10.0000001', function () {
                expect(mathEnforcer.subtractTen(0.0000001)).to.be.equal(-9.9999999);
            });
        });

        describe("sum should return result", function () {
            it('with a 6 & 9, should return 15', function () {
                expect(mathEnforcer.sum(6, 9)).to.be.equal(15);
            });
            it('with a 0 & 3, should return 3', function () {
                expect(mathEnforcer.sum(0, 3)).to.be.equal(3);
            });
            it('with a -3 & -5, should return -8', function () {
                expect(mathEnforcer.sum(-3, -5)).to.be.equal(-8);
            });
            it('with a 0.0000001 & 0.0000002, should return 0.0000003', function () {
                expect(mathEnforcer.sum(0.0000001, 0.0000002)).to.be.closeTo(0, 0.0000003);
            });
            it('with a -6 & 9, should return 3', function () {
                expect(mathEnforcer.sum(-6, 9)).to.be.equal(3);
            });
        });
    });
});
