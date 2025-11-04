const library = [];
let bookName;
let author;
let year;
let pages;

function Book(name, author, year, pages, id) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.id = id;
}

function createId () {
    return self.crypto.randomUUID();
}

function addBookToLibrary() {
    const bookId = createId();
    const book = new Book(bookName, author, year, pages);
    library.push(book);
}

function showBooks() {
    for (i = 0; i > library.length; i++){
        console.log(library[i]);
    }
}

/*const book1 = new Book("MMmmasd", "K. Milly", 1993, 230, "dfgsf-sdfsd-sdf2");
const book2 = new Book("Daisies", "Michael May", 2012, 145, "sdf-erws-gfd");
library.push(book1);
library.push(book2);
showBooks();*/