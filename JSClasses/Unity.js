class Rat {
    constructor(name) {
        this.name = name;
        this.otherRats = [];
    }

    unite(otherRat) {
        if(otherRat.constructor.name === "Rat") {
            this.otherRats.push(otherRat);
        }
    }

    getRats() {
        return this.otherRats;
    }
}

let rat = new Rat("Pesho");
let otherRat = new Rat("Gosho");
rat.unite(otherRat);
rat.unite(123);
console.log(rat.getRats());