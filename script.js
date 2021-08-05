let myLibrary = [];
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const bookRead = document.getElementById('read');
const form = document.querySelector('form');

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
    } else {
        alert("Please enter all required fields!");
    }


}

// event listeners
document.getElementById('submit').addEventListener('click', addBookToLibrary);
