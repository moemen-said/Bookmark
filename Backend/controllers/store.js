const User = require("../models/user");
const Book = require("../models/book");
const config = require("../config/config");
const { response } = require("express");

exports.getBook = (req, res, next) => {
    const bookId = req.params.bookId;
    Book.findOne({ _id: bookId }).then((book) => {
        if (book)
            return res.status(200).json({
                success: true,
                message: "book exist",
                book: book,
            });
        else {
            return res.status(404).json({
                success: false,
                message: "book does not exist in our database",
            });
        }
    });
};

exports.getBooks = (req, res, next) => {
    Book.find().then((books) => {
        if (books)
            return res.status(200).json({
                success: true,
                message: "books exist",
                books: books,
            });
        else {
            return res.status(404).json({
                success: false,
                message: "no books exist",
            });
        }
    });
};

exports.addToCart = function (req, res, next) {
    const userId = req.userData.id;
    const book = req.body.book;

    User.findOne({ _id: userId })
        .then((user) => {
            if (user) {
                let updatedCart = user.cart;
                const boughtBook = {
                    bookId: book._id,
                    price: book.price,
                    haveDiscount: book.haveDiscount,
                    discount: book.discount,
                    priceAfterDiscount: book.priceAfterDiscount,
                };
                updatedCart.books.push(boughtBook);
                if (book.haveDiscount) {
                    updatedCart.totalPrice = updatedCart.totalPrice + book.priceAfterDiscount;
                } else {
                    updatedCart.totalPrice = updatedCart.totalPrice + book.price;
                }
                user.cart = updatedCart;
                user.markModified('cart');
                user.save()
                .then((result) => {
                    res.status(201).json({
                        success: true,
                        message: 'Added successfuly to your cart'
                    })
                })
                .catch(err=>{
                    console.log(err);
                    res.status(500).json({
                        success:false,
                        message: 'Something went wrong please try again later'
                    })
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "book didn't add to your card please try again later",
            });
        });
};

exports.removeFromCart = (req, res, next) => { };

exports.clearCart = (req, res, next) => {
    User.clearCart();
};
