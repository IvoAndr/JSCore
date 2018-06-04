function endsWith(str, end) {
    return str.endsWith(end);
}

console.log(endsWith("This sentence ends with fun?", "fun?"));
console.log(endsWith("This is Houston, we have…", "We have…"));
console.log(endsWith("The new iPhone has no headphones jack.", "o headphones jack."));