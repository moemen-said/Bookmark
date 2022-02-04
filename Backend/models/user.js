const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
            default: "user",
        },
        name: {
            type: String,
            required: true,
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
        },
        ownedBooks: {
            type: [mongoose.Types.ObjectId],
            required: true,
            ref: "Book",
            default: [],
        },
        cart: {
            totalPrice: {
                type: Number,
                required: true,
                default: 0,
            },
            haveDiscount: {
                type: Boolean,
                required: true,
            },
            discount: {
                type: Number,
                required: false,
            },
            priceAfterDiscount: {
                type: Number,
                required: false,
            },
            books: {
                type: [mongoose.Types.ObjectId],
                ref: "Book",
                required: false,
                default: [],
            },
        },
    },
    { timestamps: true }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
