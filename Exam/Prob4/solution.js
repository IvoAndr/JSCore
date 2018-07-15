function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let product = $(".custom-select");
    let price = $("#price");
    let quantity = $("#quantity");
    let button = $("#submit");
    let display = $(".display");
    let totalQuantity = 0;
    let totalPrice = 0;

    product.on("input", function () {
        button.removeAttr("disabled");

    });

    button.on("click", function () {
        let text = `Product: ${product.val()} Price: ${price.val()} Quantity: ${quantity.val()}`;
        display.append($("<li>").text(text));
        totalQuantity += Number(quantity.val());
        $("#capacity").val(totalQuantity);
        totalPrice += Number(price.val());
        $("#sum").val(totalPrice);
        product.val("");
        price.val(1);
        quantity.val(1);
        button.attr("disabled", "true");
        checkQuantity();
    });

    function checkQuantity() {
        if (totalQuantity >= 150) {
            $("#capacity").addClass("fullCapacity").val("full");
            product.attr("disabled", "true");
            price.attr("disabled", "true");
            quantity.attr("disabled", "true");
            button.attr("disabled", "true");
        }
    }
}