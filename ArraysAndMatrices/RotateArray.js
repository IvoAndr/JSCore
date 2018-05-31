function rotateArray(data) {
    let rotation = Number(data[data.length - 1]);
    data.pop();

    for (let i = 0; i < rotation; i++) {
        data.unshift(data[data.length - 1]);
        data.pop();
    }

    console.log(data.join(" "));
}

rotateArray(["1", "2", "3", "4", "2"]);
console.log("-".repeat(15));
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);