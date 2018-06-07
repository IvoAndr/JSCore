function findVariableNamesInSentences(str) {
    let vars = [];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;

    vars.push(str.match(regex));

    console.log(vars[0].map(v => v = v.substr(1)).join(","));
}

findVariableNamesInSentences("The _id and _age variables are both integers.");
console.log("-".repeat(15));
findVariableNamesInSentences("Calculate the _area of the _perfectRectangle object.");
console.log("-".repeat(15));
findVariableNamesInSentences("__invalidVariable _evenMoreInvalidVariable_ _validVariable");