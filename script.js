let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
}

Book.prototype.readTrue = function() {
    this.read = true;
}

Book.prototype.readFalse = function() {
    this.read = false;
}

function addBookToLibrary() {
  // adds book to library
}

//test
let bookOne = new Book('The Hobbit', 'Tolkien', 150);
console.log(bookOne);
bookOne.readTrue();
console.log(bookOne);