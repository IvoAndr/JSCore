function minkeDecode(data) {
    let startChar = Number(data[0]);
    let endChar = Number(data[1]);
    let rightWord = data[2];
    let rightWordLength = data[2].length;
    let encryptedText = data[3];
    let regex = /[A-Z][a-z]+[A-Z]/g;
    let countries = encryptedText.match(regex);
    regex = /\d{3}[\\.\d]*/g;
    let city = encryptedText.match(regex).map(n => n = String.fromCharCode(Math.ceil(n))).join("");
    let cityU = function() {
        return city[0].toUpperCase() + city.substr(1);
    };

    console.log(countries[0].substr(0, startChar) + rightWord + countries[0].substr(endChar + 1).toLowerCase() + " => " + cityU());
}

minkeDecode(["3", "5", "gar", "114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);
console.log("-".repeat(15));
minkeDecode(["1", "4","loveni", "SerbiA 67 – sDf1d17ia aTe 1, 108 confin$4%#ed likewise it humanity  Bulg35aria - VarnA railLery1a0s1 111 an unpacked as 109 he"]);
console.log("-".repeat(15));
minkeDecode(["5", "7", "riA", "BulgaziP 67 � sDf1d17ia aTe 1, 098 confin$4%#ed 117 likewise 114 103 it human 097 ity  Bulg35aria - VarnA railLery1a0s1 115 an unpacked as he"]);