function attachEvents() {
    $("a.button").on("click", clickedButton);

    function clickedButton() {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
    }
}