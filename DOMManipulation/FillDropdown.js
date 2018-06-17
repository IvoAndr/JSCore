function fillDropdown() {
    let newText = document.getElementById("newItemText");
    let newValue = document.getElementById("newItemValue");
    let option = document.createElement("option");

    if (newText.value !== "" && newValue.value !== "") {
        option.textContent = newText.value;
        option.value = newValue.value;
        document.getElementById("menu").appendChild(option);
        newText.value = "";
        newValue.value = "";
    }
}