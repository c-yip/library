// library array
let myLibrary = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    pages: '412',
    read: 'yes',
  },

  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    pages: '310',
    read: 'no',
  }
];

// object constructor for library
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
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
        `<button class="readButton read">Read</button>`
    } else {
      readButton = 
        `<button class="readButton unread">Not Read</button>`
    }
    libraryContent = `
      <div class="card">
        <div class="close">
          <h2>X</h2>
        </div>
        <div class="card-text">
          <h2>Title: ${book.title}</h2>
          <h2>Author: ${book.author}</h2>
          <h2>Pages: ${book.pages}</h2>
        </div>
        ${readButton}
      </div>
      `;
    newDiv.innerHTML = libraryContent;
    mainContent.appendChild(newDiv);
  });
}

mainContent.onload = displayLibrary(), readButtonFunction();

// display new book
function displayNewBook() {
  newDiv = document.createElement('div');
  newBook = myLibrary.at(-1);
  if (newBook.read == 'yes') {
    readButton = 
      `<button class="readButton read">Read</button>`
  } else {
    readButton = 
      `<button class="readButton unread">Not Read</button>`
  }
  libraryContent = `
  <div class="card">
    <h2>Title: ${newBook.title}</h2>
    <h2>Author: ${newBook.author}</h2>
    <h2>Pages: ${newBook.pages}</h2>
    ${readButton}
  </div>
  `;
  newDiv.innerHTML = libraryContent;
  mainContent.appendChild(newDiv);
  readButtonFunction();
}

// change read status button click
function readButtonFunction(){
  readButton = document.querySelectorAll('.readButton');
  console.log(readButton)
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('readButton')) {
      if (e.target.classList.contains('read')) {
        e.target.classList.replace('read', 'unread');
        e.target.textContent = 'Not Read';
      } else {
        e.target.classList.replace('unread', 'read');
        e.target.textContent = 'Read';
      }
      console.log('tally');
  }
})

// delete book object from library
