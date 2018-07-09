class Stringer {
    constructor(innerString, innerLength) {
        this.innerLength = innerLength;
        this.innerString = innerString;
        this.resultStr = this._innerString;
    }

    get innerString() {
        return this._innerString;
    }

    set innerString(innerString) {
        this._innerString = innerString;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(innerLength) {
        if (innerLength < 0) {
            this._innerLength = 0;
        }
        else {
            this._innerLength = innerLength;
        }
    }

    decrease(num) {
        let tempStr = this._innerString.split("");

        if (num >= this._innerLength) {
            this.resultStr = "...";
            return;
        }

        tempStr.push(".");
        tempStr.reverse();

        for (let i = 0; i < num; i++) {
            tempStr[i] = ".";
        }

        this.resultStr = tempStr.reverse().join("");
    }

    increase(num) {

    }

    toString() {
        return this.resultStr;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test