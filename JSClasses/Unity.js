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

    toString() {
        let text = this.name + "\n";
        for (let otherRat of this.otherRats) {
            text += "##" + otherRat.name + "\n";
        }

        return text;
    }
}

let rat = new Rat("Pesho");
rat.unite(new Rat("Gosho"));
rat.unite(new Rat("Ivan"));
rat.unite(123);
console.log(rat.getRats());
console.log("-".repeat(15));
console.log(rat.toString());