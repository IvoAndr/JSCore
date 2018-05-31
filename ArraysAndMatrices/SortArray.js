function sortArray(data) {
    console.log(data.sort((a, b) => a[0] > b[0]).sort((a, b) => a.length > b.length).join("\n"));
}

sortArray(["alpha", "beta", "gamma"]);
sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArray(["test", "Deny", "omen", "Default"]);