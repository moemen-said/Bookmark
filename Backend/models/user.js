const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Book = require("./book");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        type: {
            type: String,
            required: false,
            default: "reader",
        },
        name: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            required: false,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        boughtBooks: {
            type: [mongoose.Types.ObjectId],
            ref: "Book",
            required: false,
            default: [],
        },
        bio: {
            type: String,
            required: false,
            default: ''
        },
        ownedBooks: {
            type: [mongoose.Types.ObjectId],
            required: false,
            ref: "Book",
            default: [],
        },
        resetToken: {
            type: String,
            required: false,
            default: ''
        },
        resetTokenExpiration: {
            type: Date,
            required: false,
            default: ''
        },
        isConfirmed: {
            type: Boolean,
            required: false,
            default: false
        },
        cart: {
            totalPrice: {
                type: Number,
                required: false,
                default: 0
            },
            books: []
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model("User", userSchema);
