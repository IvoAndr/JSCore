function sortArray(data) {
    console.log(data.sort((a, b) => a[0] > b[0]).sort((a, b) => a.length > b.length).join("\n"));
}

sortArray(["alpha", "beta", "gamma"]);
console.log("-".repeat(15));
sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("-".repeat(15));
sortArray(["test", "Deny", "omen", "Default"]);