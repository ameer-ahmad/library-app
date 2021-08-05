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
    books.innerHTML = "";
    for (const book of myLibrary) {
        const el = document.createElement('div');
        el.classList.add('book');
        const title = document.createElement("p");
        title.innerText = book.title;
        const author = document.createElement('p');
        author.innerText = `by ${book.author}`
        const pages = document.createElement('p');
        pages.innerText = `${book.pages} pages`
        const read = document.createElement('button');
        read.innerText = (book.read?"read":"not read yet");
        read.classList.add("readBtn");
        const del = document.createElement('button');
        del.innerText = "X";
        del.classList.add('delete');
        el.appendChild(title);
        el.appendChild(author);
        el.appendChild(pages)
        el.appendChild(read);
        el.appendChild(del);
        books.appendChild(el);
    }
}

function readHandler() {
    const readBtns = document.querySelectorAll('.readBtn');
    const delBtns = document.querySelectorAll('.delete');

    for (let i = 0; i < readBtns.length; i++) {
        readBtns[i].onclick = function() {
            if (readBtns[i].innerText === 'read') {
                readBtns[i].innerText = "not read yet";
                myLibrary[i].read = false;
            } else {
                readBtns[i].innerText = "read";
                myLibrary[i].read = true;
            }
        }
    }

    for (let i = 0; i < delBtns.length; i++) {
        delBtns[i].onclick = function() {
            this.parentElement.parentElement.removeChild(this.parentElement);
            myLibrary.pop([i])
        }
    }
}

// event listeners
document.getElementById('submit').addEventListener('click', addBookToLibrary);
books.addEventListener('click', readHandler)