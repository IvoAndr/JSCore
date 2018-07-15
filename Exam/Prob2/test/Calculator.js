let expect = require("chai").expect;

class Calculator {
    constructor() {
        this.expenses = [];
    }

    add(data) {
        this.expenses.push(data);
    }

    divideNums() {
        let divide;
        for (let i = 0; i < this.expenses.length; i++) {
            if (typeof (this.expenses[i]) === 'number') {
                if (i === 0 || divide===undefined) {
                    divide = this.expenses[i];
                } else {
                    if (this.expenses[i] === 0) {
                        return 'Cannot divide by zero';
                    }
                    divide /= this.expenses[i];
                }
            }
        }
        if (divide !== undefined) {
            this.expenses = [divide];
            return divide;
        } else {
            throw new Error('There are no numbers in the array!')
        }
    }

    toString() {
        if (this.expenses.length > 0)
            return this.expenses.join(" -> ");
        else return 'empty array';
    }

    orderBy() {
        if (this.expenses.length > 0) {
            let isNumber = true;
            for (let data of this.expenses) {
                if (typeof data !== 'number')
                    isNumber = false;
            }
            if (isNumber) {
                return this.expenses.sort((a, b) => a - b).join(', ');
            }
            else {
                return this.expenses.sort().join(', ');
            }
        }
        else return 'empty';
    }
}


describe("", function() {
    it("", function () {
        let output = new Calculator();
        expect(output.toString()).to.be.equal("empty array");
    });
    it("", function() {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        expect(output.toString()).to.be.equal("10 -> Pesho -> 5");
    });
    it("", function () {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        output.add(10);
        expect(output.divideNums()).to.be.equal(1);
    });
    it("", function () {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        output.add(10);
        output.divideNums();
        output.add(1);
        expect(output.orderBy()).to.be.equal("1, 1");
    });
    it("", function () {
        let output = new Calculator();
        output.add(10);
        output.add("Pesho");
        output.add("5");
        output.add(10);
        output.divideNums();
        output.add(1);
        expect(output.toString()).to.be.equal("1 -> 1");
    });
    it("", function () {
        let output = new Calculator();
        output.add("a");
        output.add("b");
        output.add("c");
        try {
            expect(output.divideNums()).to.throw(Error("There are no numbers in the array!"));
        } catch (err) {
        }
    });
    it("", function () {
        let output = new Calculator();
        output.add(0);
        output.add(0);
        output.add(0);
        expect(output.divideNums()).to.be.equal("Cannot divide by zero");
    })
});