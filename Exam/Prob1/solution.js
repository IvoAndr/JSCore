function addSticker() {
    let title = $(".title");
    let text = $(".content");

    if (title.val() && text.val()) {
        let li = $("<li>").addClass("note-content");
        let a = $("<a href='#'>").addClass("button").text("x");
        let h2 = $("<h2>").text(title.val());
        let hr = $("<hr>");
        let p = $("<p>").text(text.val());
        li.append(a)
            .append(h2)
            .append(hr)
            .append(p);

        $("#sticker-list").append(li);

        title.val("");
        text.val("");
    }

    let close = $(".button");

    close.on("click", function () {
        $(this).parent().get(0).remove();
    });
}