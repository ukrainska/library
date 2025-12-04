const addBookB = document.querySelector(".addBookB");
const removeBookB = document.querySelector(".removeBookB");
const popupForm = document.querySelector(".popup-form");
const submitB = document.querySelector(".submit-button");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const pages = document.querySelector("#pages");
let radioButtons = document.querySelector('input[name="reading"]:checked');

const library = [];
let readingStatus;

addBookB.addEventListener("click", () => {
    popupForm.classList.toggle("active");
});

submitB.addEventListener("click", (event) => {
    event.preventDefault();
    popupForm.style.opacity = "0";
    popupForm.style.transform = "translate(-50%, -50%) scale(0.8)";
    addBookToLibrary();
    showBooks();

    setTimeout(() => {
        popupForm.classList.remove("active");
        popupForm.style.opacity = "";
        popupForm.style.transform = "";
        
    }, 400);
});

function Book(name, author, year, pages, id, readingStatus) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.id = id;
    this.status = readingStatus;
};

function createId () {
    return self.crypto.randomUUID();
}

function addBookToLibrary() {
    const readingStatus = document.querySelector('input[name="reading"]:checked')?.value;
    const bookId = createId();
    const book = new Book(
        title.value, 
        author.value, 
        year.value, 
        pages.value, 
        bookId, 
        readingStatus);
    library.push(book);
}

function showBooks() {
    for (i = 0; i > library.length; i++){
        console.log(library[i]);
    }
}

