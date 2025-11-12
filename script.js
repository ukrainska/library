const addBookB = document.querySelector(".addBookB");
const removeBookB = document.querySelector(".removeBookB");
const popupForm = document.querySelector(".popup-form");
const submitB = document.querySelector(".submit-button");


const library = [];
let bookName;
let author;
let year;
let pages;

addBookB.addEventListener("click", () => {
    popupForm.classList.toggle("active");
})

submitB.addEventListener("click", (event) => {
    event.preventDefault();
    popupForm.style.opacity = "0";
    popupForm.style.transform = "translate(-50%, -50%) scale(0.8)";

    sertTimeout(() => {
        popupForm.classList.remove("active");
        popupForm.style.opacity = "";
        popupForm.style.transform = "";
        
    }, 400);
})

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