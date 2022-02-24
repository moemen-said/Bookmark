const { mongoose } = require("mongoose");

const User = require("../models/user");
const Book = require("../models/book");

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

exports.addToCart = (req, res, next) => {
    const userId = req.userData.id;
    const bookId = req.body.bookId;

    User.findOne({ _id: userId })
        .then((user) => {
            if (user) {
                let updatedCart = user.cart;
                updatedCart.books.push(bookId);
                Book.findOne({ _id: bookId }).then((book) => {
                    if (book.haveDiscount){
                        (updatedCart.totalPrice += book.priceAfterDiscount)
                    }
                    else{
                        (updatedCart.totalPrice += book.price);}
                    user.cart = updatedCart;
                    user.markModified("cart");
                    user.save()
                        .then(() => {
                            res.status(201).json({
                                success: true,
                                cart: updatedCart,
                                message: "Added successfuly to your cart",
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(500).json({
                                success: false,
                                message: "Something went wrong please try again later",
                            });
                        });
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "book didn't add to your cart please try again later",
            });
        });
};

exports.removeFromCart = (req, res, next) => {
    const userId = req.userData.id;
    const removedBookId = req.body.bookId;

    User.findOne({ _id: userId })
        .then((user) => {
            if (user) {
                let newCart = user.cart;
                newCart.books = newCart.books.filter((bookId) => bookId != removedBookId);
                Book.findOne({ _id: removedBookId }).then((removedBook) => {
                    removedBook.haveDiscount ? (newCart.totalPrice = newCart.totalPrice - removedBook.priceAfterDiscount) : (newCart.totalPrice = newCart.totalPrice - removedBook.price);
                    user.cart = newCart;
                    user.markModified("cart");
                    user.save()
                        .then(() => {
                            res.status(201).json({
                                success: true,
                                cart: newCart,
                                message: "Removed successfully from your cart",
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status(500).json({
                                success: false,
                                message: "Something went wrong please try again later",
                            });
                        });
                });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                success: false,
                message: "book didn't remove from your cart please try again later",
            });
        });
};

exports.clearCart = (req, res, next) => {
    User.clearCart();
};
