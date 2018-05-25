"use strict";

function templateFormat(data) {
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>\n";

    for (let i = 0; i < data.length; i += 2) {
        xml += `\t<question>\n\t\t${data[i]}\n\t</question>\n`;
        xml += `\t<answer>\n\t\t${data[i + 1]}\n\t</answer>\n`;
    }

    xml += "</quiz>";

    return xml;
}

console.log(templateFormat(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]));
console.log(templateFormat(["Dry ice is a frozen form of which gas?", "Carbon Dioxide",
    "What is the brightest star in the night sky?", "Sirius"]));