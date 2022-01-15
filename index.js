const myLibrary = [];

function Book(title,author,pages, read){
     const book = {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    return book;

};

function addBookToLibrary(book){
    if(myLibrary.includes(book)) return "This book is already saved";
    myLibrary.push(book);
};

const book1 = new Book('Harry Potter', 'JK Rolling', 315, true);

addBookToLibrary(book1);

console.log(myLibrary[0]);

addBookToLibrary(book1);

console.log(myLibrary[0]);
