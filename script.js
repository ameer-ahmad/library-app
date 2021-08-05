let myLibrary = [];
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const form = document.querySelector('form');
const books = document.getElementById('books');

function Book() {
    this.title = bookTitle.value;
    this.author = bookAuthor.value;
    this.pages = bookPages.value;
    this.read = bookRead.checked;
}

function addBookToLibrary(e) {
    e.preventDefault();
    if (form.checkValidity()) {
        myLibrary.push(new Book);
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
        bookRead.checked =  false;
        displayBooks();
    } else {
        alert("Please enter all required fields!");
    }
}

function displayBooks() {
    for (const book of myLibrary) {
        const el = document.createElement('div');
        el.classList.add('book');
        const title = document.createTextNode(book.title);
        const author = document.createTextNode(book.author);
        const pages = document.createTextNode(book.pages);
        const read = document.createTextNode(book.read?"read":"not read yet");
        el.appendChild(title);
        el.appendChild(author);
        el.appendChild(pages)
        el.appendChild(read);
        books.appendChild(el);
    }
}

// event listeners
document.getElementById('submit').addEventListener('click', addBookToLibrary);
