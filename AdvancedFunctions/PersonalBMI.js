function personalBMI(name, age, weight, height) {
    let person = { "name": name,
            "personalInfo": { "age": age, "weight": weight, "height": height}
    };
    let bmi = weight / Math.pow(height / 100, 2);
    person["BMI"] = Math.round(bmi);
    let status = "";

    if (bmi < 18.5) {
        status = "underweight";
    }
    else if (bmi < 25) {
        status = "normal";
    }
    else if (bmi < 30) {
        status = "overweight";
    }
    else {
        status = "obese";
        person["recommendation"] = "admission required";
    }

    person["status"] = status;

    return person;
}

console.log(personalBMI("Peter", 29, 75, 182));
console.log(personalBMI("Honey Boo Boo", 9, 57, 137));