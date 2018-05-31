function printEveryNthElementFromAnArray(data) {
    let step = Number(data[data.length - 1]);
    data.pop();

    for (let i = 0; i < data.length; i += step) {
        console.log(data[i]);
    }
}

printEveryNthElementFromAnArray(["5", "20", "31", "4", "20", "2"]);
console.log("-".repeat(15));
printEveryNthElementFromAnArray(["dsa", "asd", "test", "tset", "2"]);
console.log("-".repeat(15));
printEveryNthElementFromAnArray(["1", "2", "3", "4", "5", "6"]);