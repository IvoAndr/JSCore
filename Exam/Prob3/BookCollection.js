class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        if (room === "livingRoom" || room === "bedRoom" || room ==="closet") {
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = Number(shelfCapacity);
            this.shelfCondition = 0;
        }
        else {
            throw new Error(`Cannot have book shelf in ${room}`);
        }
    }

    set shelfCondition(shelfCondition) {
        this._shelfCondition = shelfCondition;
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        if (this.shelf.length === this.shelfCapacity) {
            this.shelf.splice(0, 1);
        }

        let book = { "bookName": bookName, "bookAuthor": bookAuthor, "genre": genre };
        this.shelf.push(book);
        this.shelf.sort((a, b) => a.bookAuthor > b.bookAuthor);
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter(b => b.bookName !== bookName);
    }

    showBooks(genre) {
        let books = this.shelf.filter(b => b.genre === genre);
        let text =`Results for search "${genre}":\n`;

        for (let i = 0; i < books.length; i++) {
            text += `\uD83D\uDCD6 ${books[i].bookAuthor} - "${books[i].bookName}"`;

            if (i < books.length - 1) {
                text += "\n";
            }
        }

        return text;
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf";
        }

        let text = `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;

        for (let book of this.shelf) {
            text += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
        }

        return text;
    }
}

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));
bedRoom.throwAwayBook("The Guns of August");
console.log(bedRoom.toString());

// let livingRoom = new BookCollection("Programming", "livingRoom", 5)
//     .addBook("Introduction to Programming with C#", "Svetlin Nakov")
//     .addBook("Introduction to Programming with Java", "Svetlin Nakov")
//     .addBook("Programming for .NET Framework", "Svetlin Nakov");
// console.log(livingRoom.toString());