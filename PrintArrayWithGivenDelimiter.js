"use strict";

function printArrayWithGivenDelimiter(data) {
    let output = [];

    for (let i = 0; i < data.length - 1; i++) {
        output += data[i];

        if (i < data.length - 2) {
            output += data[data.length - 1];
        }
    }

    return output;
}

console.log(printArrayWithGivenDelimiter(["One", "Two", "Three", "Four", "Five", "-"]));
console.log(printArrayWithGivenDelimiter(["How about no?", "I", "will", "not", "do", "it!", "_"]));