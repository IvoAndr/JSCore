function splitAStringWithADelimiter(str, delimeter) {
    str.split(delimeter).forEach(w => console.log(w));
}

splitAStringWithADelimiter("One-Two-Three-Four-Five", "-");
console.log("-".repeat(15));
splitAStringWithADelimiter("http://platform.softuni.bg", ".");