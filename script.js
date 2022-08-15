// library array
let myLibrary = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    pages: '412',
    read: 'yes',
    info: function () {
      if (this.read === false) {
          return `The ${title} by ${author}, ${pages} pages, not read yet`;
      } else {
          return `The ${title} by ${author}, ${pages} pages, has been read`;
      }
    }
  },

  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    pages: '310',
    read: 'no',
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

  displayNewBook();
});

// add entire library to main content
function displayLibrary() {
  myLibrary.forEach(book => {
    newDiv = document.createElement('div');
    if (book.read == 'yes') {
      readButton = 
        `<button class="readButton">Read</button>`
    } else {
      readButton = 
        `<button class="notReadButton">Not Read</button>`
    }
    libraryContent = `
      <div class="card">
        <h2>Title: ${book.title}</h2>
        <h2>Author: ${book.author}</h2>
        <h2>Pages: ${book.pages}</h2>
        ${readButton}
      </div>
      `;
    newDiv.innerHTML = libraryContent;
    mainContent.appendChild(newDiv);
  });
}

mainContent.onload = displayLibrary();

// display new book
function displayNewBook() {
  newDiv = document.createElement('div');
  newBook = myLibrary.at(-1);
  libraryContent = `
  <div class="card">
    <h2>Title: ${newBook.title}</h2>
    <h2>Author: ${newBook.author}</h2>
    <h2>Pages: ${newBook.pages}</h2>
    <h2>Read?: ${newBook.read}</h2>
  </div>
  `;
  newDiv.innerHTML = libraryContent;
  mainContent.appendChild(newDiv);
}