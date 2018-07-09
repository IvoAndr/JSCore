function argumentInfo() {
    let counter = {};

    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        let type = typeof argument;
        console.log(type + ": " + argument);

        if (!counter.hasOwnProperty(type)) {
            counter[type] = 0;
        }

        counter[type]++;

    }

    let types = [];

    for (let count in counter) {
        types.push([count, counter[count]]);
    }

    types.sort((a, b) => b[1] - a[1]);

    console.log(types.map(t => t.join(" = ")).join("\n"));
}

argumentInfo("cat", 42, function () { console.log("Hello world!"); });
console.log("-".repeat(15));
argumentInfo({ name: 'bob'}, 3.333, 9.999);
console.log("-".repeat(15));
argumentInfo(42, 'cat', 15, 'kitten', 'tomcat');
console.log("-".repeat(15));
argumentInfo(42, 'cat', [], undefined);