function increment(containerId) {
    let container = $(containerId);
    let fragment = document.createDocumentFragment();

    let textArea = $("<textarea>");
    textArea.addClass("counter");
    textArea.val(0);
    textArea.attr("disabled", true);

    let incrButton = $("<button>Increment</button>");
    incrButton.addClass("btn");
    incrButton.attr("id", "incrementBtn");
    incrButton.on("click", function () {
        let currentValue = textArea.val();
        textArea.val(++currentValue);
    });

    let addButton = $("<button>Add</button>");
    addButton.addClass("btn");
    addButton.attr("id", "addBtn");
    addButton.on("click", function () {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(ul);
    });

    let ul = $("<ul>");
    ul.addClass("results");

    textArea.appendTo(fragment);
    incrButton.appendTo(fragment);
    addButton.appendTo(fragment);
    ul.appendTo(fragment);
    container.append(fragment);
}