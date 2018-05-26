"use strict";

function cookingByNumbers(data) {
    let num = parseFloat(data[0]);

    function chop(num) { return num / 2; }
    
    function dice(num) { return Math.sqrt(num); }

    function spice(num) { return ++num; }

    function bake(num) { return num * 3; }

    function fillet(num) { return num - num * 0.2; }

    for (let i = 1; i < data.length; i++) {
        num = eval(data[i])(num);
        console.log(num);
    }
}

cookingByNumbers([32, "chop", "chop", "chop", "chop", "chop"]);
console.log("-".repeat(15));
cookingByNumbers([9, "dice", "spice", "chop", "bake", "fillet"]);