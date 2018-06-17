function search() {
    let searchedText = $("#searchText").val();

    if (searchedText) {
        let foundText = $(`#towns li:contains(${searchedText})`);
        $("li").css("font-weight", "");
        foundText.css("font-weight", "bold");
        $("#result").text(`${foundText.length} matches found.`);
    }
}