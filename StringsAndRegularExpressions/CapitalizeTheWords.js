function capitalizeTheWords(str) {
    function format(s) {
        let first = s[0].toUpperCase();
        let rest = "";

        for (let i = 1; i < s.length; i++) {
            rest += s[i].toLowerCase();
        }

        return first + rest;
    }

    return str.split(" ").map(s => format(s)).join(" ");
}

console.log(capitalizeTheWords("Capitalize these words"));
console.log(capitalizeTheWords("Was that Easy? tRY thIs onE for SiZe!"));