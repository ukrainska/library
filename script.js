const bookDisplay = document.querySelector('.book-display');
const deleteButtons = document.querySelectorAll(".delete-button");

const addBookB = document.querySelector(".addBookB");
const removeBookB = document.querySelector(".removeBookB");
const popupForm = document.querySelector(".popup-form");
const submitB = document.querySelector(".submit-button");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const pages = document.querySelector("#pages");

const bTitle = document.getElementById("b-title");
const bAuthor = document.getElementById("b-author");
const bYear = document.getElementById("b-year");
const bPages = document.getElementById("b-pages");
const bId = document.getElementById("b-id");

const bookCenter = document.querySelector(".book.center");

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

    setTimeout(() => {
        popupForm.classList.remove("active");
        popupForm.style.opacity = "";
        popupForm.style.transform = "";
        
    }, 400);
});

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const bookCard = event.target.closest(".book");
        if (bookCard) {
            bookCard.remove();
        }
    });
})

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

    bTitle.textContent = `Title: ${title.value}`;
    bAuthor.textContent = `Author: ${author.value}`;
    bYear.textContent = `Year: ${year.value}`;
    bPages.textContent = `Pages: ${pages.value}`;
    bId.textContent = `id: ${bookId}`;
}


