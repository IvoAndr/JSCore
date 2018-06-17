function initializeTable() {
    addCountry("Bulgaria", "Sofia");
    addCountry("Germany", "Berlin");
    addCountry("Russia", "Moscow");

    $("#createLink").on("click", createCountry);

    function createCountry() {
        let country = $("#newCountryText").val();
        let capital = $("#newCapitalText").val();
        if (country !== "" && capital !== "") {
            addCountry(country, capital);
        }
    }

    function addCountry(country, capital) {
        let row = $("<tr>")
            .append($("<td>").text(country))
            .append($("<td>").text(capital))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>").on("click", moveUp))
                .append($("<a href='#'>[Down]</a>").on("click", moveDown))
                .append($("<a href='#'>[Delete]</a>").on("click", del)));

        row.css("display", "none");
        $("#countriesTable").append(row);
        hideLinks();
        row.fadeIn();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            hideLinks();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            hideLinks();
        });
    }

    function del() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            hideLinks();
        });
    }

    function hideLinks() {
        $("#countriesTable a").css("display", "inline");
        let rows = $("#countriesTable tr");
        $(rows[2]).find("a:contains('Up')").css("display", "none");
        $(rows[rows.length - 1]).find("a:contains('Down')").css("display", "none");
    }
}