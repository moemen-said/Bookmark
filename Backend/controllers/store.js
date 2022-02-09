const User = require("../models/user");
const Book = require("../models/book");
const config = require("../config/config");

exports.getBook = (req, res, next) => {
    const bookId = req.params.bookId
    Book.findOne({_id:bookId})
        .then(book => {
            if (book)
                return res.status(200).json({
                    success: true,
                    message: 'book exist',
                    book: book
                })
            else {
                return res.status(404).json({
                    success:false,
                    message: 'book does not exist in our database'
                })
            }
        })
}