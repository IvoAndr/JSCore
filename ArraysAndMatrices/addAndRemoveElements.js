function addAndRemoveElements(data) {
    let numArr = [];
    let num = 1;


    for (let i = 0; i < data.length; i++) {
        if (data[i] === "add") {
            numArr.push(num);
        }
        else if (data[i] === "remove") {
            numArr.pop();
        }

        num++;
    }

    if (numArr.length === 0) {
        console.log("Empty");
        return;
    }

    for (let i = 0; i < numArr.length; i++) {
        console.log(numArr[i]);
    }
}

addAndRemoveElements(["add", "add", "add", "add"]);
console.log("-".repeat(15));
addAndRemoveElements(["add", "add", "remove", "add", "add"]);
console.log("-".repeat(15));
addAndRemoveElements(["remove", "remove", "remove"]);


