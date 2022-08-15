// library array
let myLibrary = [
  {
    title: 'title',
    author: 'author',
    pages: 'pages',
    read: 'read',
    info: function () {
    if (this.read === false) {
        return `The ${title} by ${author}, ${pages} pages, not read yet`;
    } else {
        return `The ${title} by ${author}, ${pages} pages, has been read`;
    }
  }
  }
];

// object constructor for library
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (this.read === false) {
        return `The ${title} by ${author}, ${pages} pages, not read yet`;
    } else {
        return `The ${title} by ${author}, ${pages} pages, has been read`;
    }
  }
}

// prototypes for read status 
Book.prototype.readTrue = function() {
    this.read = true;
}

Book.prototype.readFalse = function() {
    this.read = false;
}

// adds book to library
const mainContent = document.querySelector('.main-content');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let title = document.querySelector('#book-title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#page-numbers').value;
  let read = document.querySelector('#read');
  let value = read.options[read.selectedIndex].value;
  console.log(value);
  myLibrary.push(new Book(title, author, pages, value));
  console.log(myLibrary);
});

// add library to main content
myLibrary.forEach(book => {
  newDiv = document.createElement('div');
  bookCard = `
    <div class="card">
      <h2>Title: ${book.title}</h2>
      <h2>Author: ${book.author}</h2>
      <h2>Pages: ${book.pages}</h2>
    </div>
    `;
  newDiv.innerHTML = bookCard;
  mainContent.appendChild(newDiv);
});
