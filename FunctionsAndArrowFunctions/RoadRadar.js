"use strict";

function roadRadar(data) {
    let currentSpeed = { speed: Number(data[0]), area: data[1] };
    let limits = { motorway: 130, interstate: 90, city: 50, residential: 20};

    if (currentSpeed.speed <= limits[currentSpeed.area]) {
        return "";
    }
    else if (currentSpeed.speed <= limits[currentSpeed.area] + 20) {
        return "speeding";
    }
    else if (currentSpeed.speed <= limits[currentSpeed.area] + 40) {
        return "excessive speeding";
    }
    else {
        return "reckless driving";
    }
}

console.log(roadRadar([40, "city"]));
console.log(roadRadar([21, "residential"]));
console.log(roadRadar([120, "interstate"]));
console.log(roadRadar([200, "motorway"]));



