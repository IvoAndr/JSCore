"use strict";

function validityChecker(points) {
    let firstPoint = { x: points[0], y: points[1] };
    let secondPoint = { x: points[2], y: points[3] };
    let zeroPoint = { x: 0, y: 0 };

    function checkDistance(point1, point2) {
        let distance = Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);

        if (Number.isInteger(distance)) {
            return `{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is valid`;
        }

        return `{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is invalid`;
    }

    console.log(checkDistance(firstPoint, zeroPoint));
    console.log(checkDistance(secondPoint, zeroPoint));
    console.log(checkDistance(firstPoint, secondPoint));
}

validityChecker([3, 0, 0, 4]);
console.log("-".repeat(15));
validityChecker([2, 1, 1, 1]);