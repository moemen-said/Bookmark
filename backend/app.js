const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
})

app.use('/books', (req, res, next) => {
    const books = [
        {
            id: '', name: 'Book 4', author: 'moemen said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/4.jpg', haveDiscount: false
        },
        {
            id: '', name: 'Book 3', author: 'mohamed ahmed', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/3.jpg', haveDiscount: true, discount: 25, priceAfterDiscount: 40
        },
        {
            id: '', name: 'Book 2', author: 'marwan mohamed', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/2.jpg', haveDiscount: true, discount: 8, priceAfterDiscount: 50
        },
        {
            id: '', name: 'Book 5', author: 'mohamed said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/5.jpg', haveDiscount: false
        }
        , {
            id: '', name: 'Book 1', author: 'moemen said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/1.jpg', haveDiscount: false
        }
    ]
    res.status(200).json(books)
})

module.exports = app;