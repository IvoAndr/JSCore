function createBook(selector, title, author, isbn) {
    (function generator() {
        let id = 1;

        let bookDiv = $("<div>");
        bookDiv.attr("id", `book${id}`);
        bookDiv.attr("style", "border: mediun none");

        let titleP = $("<p>");
        titleP.attr("class", "title");
        titleP.text(title);
        titleP.appendTo(bookDiv);

        let authorP = $("<p>");
        authorP.attr("class", "author");
        authorP.text(author);
        authorP.appendTo(bookDiv);

        let isbnP = $("<p>");
        isbnP.attr("class", "isbn");
        isbnP.text(isbn);
        isbnP.appendTo(bookDiv);

        let selBtn = $("<button>");
        selBtn.text("Select");
        selBtn.appendTo(bookDiv);

        let deselBtn = $("<button>");
        deselBtn.text("Deselect");
        deselBtn.appendTo(bookDiv);

        bookDiv.appendTo($(selector));

        return function (selector, title, author, isbn) {
        }
    }());

    $("button:contains('Select')").on("click", function () {
        let div = $(this.parentNode);
        div.attr("style", "border: 2px solid blue;");
    });

    $("button:contains('Deselect')").on("click", function () {
        let div = $(this.parentNode);
        div.attr("style", "border: medium none;");
    });
}