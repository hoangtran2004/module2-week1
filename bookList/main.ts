import {Book} from "./Book";

let book1 = new Book('sag', 'gaur', true);
let book2 = new Book('doraemon', 'fujjiko fujjo', false)
let books: Book[] = [];
books.push(book1, book2);
for (let i=0;i<books.length;i++) {
    let book =books[i];
    let bookInfo=`${book.tittle} +by${book.author}`;
    if (book.alreadyRead) {
        console.log('u already read this book')
    }else console.log(`u dont read this book ${bookInfo}`)
}