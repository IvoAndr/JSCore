function travelTime(data) {
    let offers = {};
    let index = 0;

    for (let offer of data) {
        let [country, town, price] = offer.split(" > ");
        let currentOffer = { country: country, town: town, price: Number(price) };
        offers[index] = currentOffer;
        index++;

        console.log(currentOffer);
    }

    console.log(offers);
}

travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200" ]);