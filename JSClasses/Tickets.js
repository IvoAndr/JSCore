function sortTickets(ticketsData, sort) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let sortedTickets = [];

    for (let ticket of ticketsData) {
        let [destination, price, status] = ticket.split("|");
        let currentTicket = new Ticket(destination, price, status);
        sortedTickets.push(currentTicket);
    }

    if (sort === "destination") {
        sortedTickets.sort((a, b) => a.destination > b.destination);
    }
    else if (sort === "price") {
        sortedTickets.sort((a, b) => a.price > b.price);
    }
    else if (sort === "status") {
        sortedTickets.sort((a, b) => a.status > b.status);
    }

    return sortedTickets;
}

console.log(sortTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination'));
console.log("-".repeat(15));
console.log(sortTickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status'));