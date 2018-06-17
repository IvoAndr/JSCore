function extractText() {
    $("#result").text($("li").toArray().map(l => l.textContent).join(", "));
}