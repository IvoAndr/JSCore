"use strict";

function treasureLocator(points) {
    let tokelau = { name: "Tokelau", left: 8, right: 9, top: 0, bottom: 1 };
    let tuvalu = { name: "Tuvalu", left: 1, right: 3, top: 1, bottom: 3 };
    let samoa = { name: "Samoa", left: 5, right: 7, top: 3, bottom: 6 };
    let tonga = { name: "Tonga", left: 0, right: 2, top: 6, bottom: 8 };
    let cook = { name: "Cook", left: 4, right: 9, top: 7, bottom: 8 };
    let islands = [tokelau, tuvalu, samoa, tonga, cook];

    function checkLocation(point) {
        for (let island of islands) {
            if (point.x >= island.left && point.x <= island.right
                    && point.y >= island.top && point.y <= island.bottom) {
                return island.name;
            }
        }

        return "On the bottom of the ocean";
    }

    for (let i = 0; i < points.length; i += 2) {
        let point = { x: points[i], y: points[i + 1] };

        console.log(checkLocation(point));
    }
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
console.log("-".repeat(15));
treasureLocator([6, 4]);