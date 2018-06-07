function wordOccurences(text, word) {
    let regex = eval(`/\\b${word}\\b/gi`);

    if (text.match(regex)) {
        return text.match(regex).length;
    }

    return 0;
}

console.log(wordOccurences("The waterfall was so high, that the child couldn’t see its peak.", "the"));
console.log(wordOccurences("How do you plan on achieving that? How? How can you even think of that?", "how"));
console.log(wordOccurences("There was one. Therefore I bought it. I wouldn’t buy it otherwise.", "there"));