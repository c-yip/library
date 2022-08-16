// library array
let myLibrary = [
  {
    title: 'Dune',
    author: 'Frank Herbert',
    pages: '412',
    read: 'yes',
    idNum: -1
  },

  {
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien',
    pages: '310',
    read: 'no',
    idNum: -2
  }
];

let id = null;
// object constructor for library
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.idNum = ++id;
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
  displayLibrary();
});

// add entire library to main content
function displayLibrary() {
  myLibrary.forEach(book => {
    newDiv = document.createElement('div');
    newDiv.classList.add("card")
    if (book.read == 'yes') {
      readButton = 
        `<button class="readButton read">Read</button>`
    } else {
      readButton = 
        `<button class="readButton unread">Not Read</button>`
    }
    libraryContent = `
      <button class="close" data-id="${book.idNum}">X</button>
      <div class="card-text">
        <h2>Title: ${book.title}</h2>
        <h2>Author: ${book.author}</h2>
        <h2>Pages: ${book.pages}</h2>
      </div>
      ${readButton}
      `;
    newDiv.innerHTML = libraryContent;
    mainContent.appendChild(newDiv);
  });
}

mainContent.onload = displayLibrary();

// replaces library display to add new book
function displayNewBook() {
    let card = document.querySelectorAll('.card');
    card.forEach(card => {
      card.remove();
    })
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
document.addEventListener('click', e => {
  if (e.target.classList.contains('close')) {
    let selected = e.target.dataset.id;
    console.log(selected);
    const indexOfObject = myLibrary.findIndex(object => {
      return object.idNum == `${selected}`;
    });
    console.log(indexOfObject);
    myLibrary.splice(indexOfObject, 1);
    console.log(myLibrary);
    displayNewBook();
    displayLibrary();
  }
})