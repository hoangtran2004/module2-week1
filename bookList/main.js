"use strict";
exports.__esModule = true;
var Book_1 = require("./Book");
var book1 = new Book_1.Book('sag', 'gaur', true);
var book2 = new Book_1.Book('doraemon', 'fujjiko fujjo', false);
var books = [];
books.push(book1, book2);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = "".concat(book.tittle, " +by").concat(book.author);
    if (book.alreadyRead) {
        console.log('u already read this book');
    }
    else
        console.log("u dont read this book ".concat(bookInfo));
}
