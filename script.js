// library array
let myLibrary = [];

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

// add content