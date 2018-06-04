function captureTheNumbers(strArr) {
    let str = "";
    strArr.forEach(s => str += s + "\n");
    let numbers = [];
    let regex = /\d+/g;

    numbers.push(str.match(regex));

    console.log(numbers[0].filter(n => n !== "").join(" "));
}

captureTheNumbers(["The300", "What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);
console.log("-".repeat(15));
captureTheNumbers(["123a456", "789b987", "654c321", "0"]);
console.log("-".repeat(15));
captureTheNumbers(["Let’s go11!!!11!", "Okey!1!"]);