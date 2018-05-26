"use strict";

function insideVolume(points) {
    let box = { x1: 10, x2: 50, y1: 20, y2: 80, z1: 15, z2: 50 };

    function isInside(point) {
        return (point.x >= box.x1 && point.x <= box.x2
                && point.y >= box.y1 && point.y <= box.y2
                && point.z >= box.z1 && point.z <= box.z2);
    }

    for (let i = 0; i < points.length; i += 3) {
        let point = { x: points[i], y: points[i + 1], z: points[i + 2] };

        if (isInside(point)) {
            console.log("inside");
        }
        else {
            console.log("outside");
        }
    }

}

insideVolume([8, 20, 22]);
console.log("-".repeat(15));
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);