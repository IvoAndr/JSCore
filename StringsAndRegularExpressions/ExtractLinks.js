function extractLinks(data) {
    let text = data.join(" ");
    let regex = /\bwww\.[a-zA-Z0-9-]+\.[a-z]+(\.[a-z]+)*\b/g;
    let links = [];

    if (text.match(regex)) {
        links.push(text.match(regex));
    }

    if (links.length > 0) {
        console.log(links[0].filter(l => l !== "").join("\n"));
    }
}

extractLinks(["Join WebStars now for free, at www.web-stars.com","You can also support our partners:", "Internet - www.internet.com", "WebSpiders - www.webspiders101.com", "Sentinel - www.sentinel.-ko"]);
console.log("-".repeat(15));
extractLinks(["Need information about cheap hotels in London?", "You can check us at www.london-hotels.co.uk!", "We provide the best services in London.", "Here are some reviews in some blogs:", "\"London Hotels are awesome!\" - www.indigo.bloggers.com", "\"I am very satisfied with their services\" - ww.ivan.bg", "\"Best Hotel Services!\" - www.rebel21.sedecrem.moc "]);
console.log("-".repeat(15));
extractLinks([""]);