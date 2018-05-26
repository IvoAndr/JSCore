"use strict";

function modifyAverage(num) {
    let numToStr = num.toString();

    function sumOfNum(numStr) {
        let sum = 0;

        for (let i = 0; i < numStr.length; i++) {
            sum += Number(numStr[i]);
        }

        return sum / numStr.length;
    }

    while (sumOfNum(numToStr) <= 5) {
        numToStr += "9";
        sumOfNum(numToStr);
    }

    return numToStr;
}

console.log(modifyAverage(101));
console.log(modifyAverage(5835));