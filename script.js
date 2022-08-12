// library array
let myLibrary = [];

// object constructor for library
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
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
function addBookToLibrary() {
  myLibrary.push(new Book('Test One', 'Christian', 420));
  myLibrary.push(new Book('Test Two', 'Anthony', 69));
  console.log(myLibrary);
  console.log(myLibrary[0]);
  console.log(myLibrary[1]);
}

// test
let bookOne = new Book('The Hobbit', 'Tolkien', 150);
console.log(bookOne.info());
bookOne.readTrue();
console.log(bookOne.info());

addBookToLibrary();