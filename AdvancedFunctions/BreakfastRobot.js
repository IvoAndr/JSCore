function action(data) {
    let ingreds = { "protein": 0, "carbohydrate": 0, "fat": 0, "flavour": 0 };
    let recipes = { "apple": { "carb": 1, "flavour": 2 },
                    "coke": { "carb": 10, "flavour": 20 },
                    "burger": { "carb": 5, "fat": 7, "flavour": 3 }
    };

    return (function () {
        if (data === "report") {
            return ingreds;
        }
        else {
            let order = data.split(" ");

            if (order[0] === "restock") {
                ingreds[order[1]] += Number(order[2]);
                return ingreds;
            }
        }
    })();

}

let breakfastRobot = action;

console.log(breakfastRobot("restock carbohydrate 10"));
console.log(breakfastRobot("restock flavour 10"));
console.log(breakfastRobot("prepare apple 1"));
console.log(breakfastRobot("report"));