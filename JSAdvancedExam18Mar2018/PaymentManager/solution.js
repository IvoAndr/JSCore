class PaymentManager {
    constructor(title) {
        this.title = title;
    }

    render(id) {
        let table = $("<table>");
        let caption = $("<caption>").text(`${this.title} Payment Manager`);
        let thead = $("<thead>");
        let htr = $("<tr>");
        let thName = $("<th>").addClass("name").text("Name");
        let thCategory = $("<th>").addClass("category").text("Category");
        let thPrice = $("<th>").addClass("price").text("Price");
        let thActions = $("<th>").text("Actions");

        htr.append(thName)
            .append(thCategory)
            .append(thPrice)
            .append(thActions);

        thead.append(htr);

        let tbody = $("<tbody>").addClass("payments");

        let tfoot = $("<tfoot>").addClass("input-data");
        let ftr = $("<tr>");
        let inputName = $("<input>").attr("name", "name").attr("type", "text");
        let inputCategory = $("<input>").attr("name", "category").attr("type", "text");
        let inputPrice = $("<input>").attr("name", "price").attr("type", "number");
        let inputButton = $("<button>").text("Add");

        ftr.append($("<td>").append(inputName))
            .append($("<td>").append(inputCategory))
            .append($("<td>").append(inputPrice))
            .append($("<td>").append(inputButton));

        tfoot.append(ftr);

        table.append(caption)
            .append(thead)
            .append(tbody)
            .append(tfoot);

        let div = $("#" + id);
        div.append(table);

        let delButton = $("<button>").text("Delete");

        inputButton.on("click", function () {
            let name = $("input[name=name]");
            let category = $("input[name=category]");
            let price = $("input[name=price]");
            let parent = $(this).parent().parent().parent().parent().get(0);

            if (name.val() && category.val() && price.val()) {
                $(parent).append($("<tr>")
                    .append($("<td>").text(name.val()))
                    .append($("<td>").text(category.val()))
                    .append($("<td>").text(Number(price.val())))
                    .append(delButton));

                name.val("");
                category.val("");
                price.val("");
            }
        });

        delButton.on("click", function () {
            $(this).parent().remove();
        })
    }
}