//Creates the book object prototype
function Book(name, author, read, notes, number) {
  this.name = name;
  this.author = author;
  this.read = read;
  this.notes = notes;
  this.number = number;
}

//Creates a new book object, adds them to the array, and calls display function
function addBookToLibrary(name, author, read, notes) {
  let book = new Book(name, author, read, notes, bookNumberCounter);
  library.push(book);
  bookNumberCounter += 1;
  book.displayBook();
  console.table(library);
}

//Removes book from library array
function removeBookFromLibrary(number) {
  const targetIndex = library.map(book => book.number).indexOf(number); 
  library.splice(targetIndex, 1);
  console.table(library);
}
//Creates interactive book displays from the book objects and adds to the library display
Book.prototype.displayBook = function() {
  console.log("Title: " + this.name + "\n" + 
              "Author: " + this.author + "\n" +
              "Read: " + this.read + "\n" +
              "Notes: " + this.notes + "\n" +
              "Number: " + this.number);
  let bookDisplay = bookForm.cloneNode(true);
  bookDisplay.id = "book-number__" + this.number;
  let bookDisplayTitle = bookDisplay.querySelector('.book-form-title');
  bookDisplayTitle.readOnly = true;
  let bookDisplayAuthor = bookDisplay.querySelector('.book-form-author');
  bookDisplayAuthor.readOnly = true;
  let bookDisplayNotes = bookDisplay.querySelector('.book-form-notes');
  bookDisplayNotes.readOnly = true;
  let bookDisplayButton = bookDisplay.querySelector('.book-form-button');
  bookDisplayButton.style.backgroundColor = 'red'; 
  bookDisplayButton.textContent = "Remove"
  bookDisplayButton.addEventListener('click', () => {
    libraryDisplay.removeChild(bookDisplay);
    removeBookFromLibrary(this.number);
  });
  libraryDisplay.appendChild(bookDisplay);
}

//Sets the core variables
const library = [];
let bookNumberCounter = 1;

//Allows interaction with the form
const addToLibraryButton = document.querySelector(".book-form-button");
const libraryDisplay = document.querySelector('.main');
const bookForm = document.querySelector('.enter-book-form');
const bookTitle = document.querySelector('.book-form-title');
const bookAuthor = document.querySelector('.book-form-author');
const bookRead = document.querySelector('.bookcheck');
const bookNotes = document.querySelector('.book-form-notes');

addToLibraryButton.addEventListener('click', () => {
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookRead.checked, bookNotes.value);
});







