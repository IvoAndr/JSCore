function travelPlans(data) {
    let sum = 0;
    let specializedCounter = 1;
    let clumsyCounter = 1;

    for (let i = 0; i < data.length; i++) {
        let [job, money] = data[i].split(" : ");

        switch (job) {
            case "Programming":
            case "Hardware maintenance":
            case "Cooking":
            case "Translating":
            case "Designing":
                if (money >= 200) {
                    sum += Number(money - money * 0.2);

                    if (specializedCounter % 2 === 0) {
                        sum += 200;
                    }

                    specializedCounter++;
                }
                break;
            case "Driving":
            case "Managing":
            case "Fishing":
            case "Gardening":
                sum += Number(money);
                break;
            default:
                if (clumsyCounter % 2 === 0) {
                    sum += Number(money - money * 0.05);
                }
                else if (clumsyCounter % 3 === 0) {
                    sum += Number(money - money * 0.1);
                }
                else {
                    sum += Number(money);
                }
                clumsyCounter++;
                break;
        }
    }


    if (sum < 1000) {
        console.log(`Final sum: ${sum.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - sum).toFixed(2)} gold more to continue in the next task.`);
    }
    else {
        console.log(`Final sum: ${sum.toFixed(2)}`);
        console.log(`Mariyka earned ${(sum - 1000).toFixed(2)} gold more.`);
    }
}

travelPlans(["Programming : 500", "Driving : 243", "Singing : 100", "Cooking : 199"]);
console.log("-".repeat(15));
travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);