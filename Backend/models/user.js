const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

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
                default: 0,
            },
            haveDiscount: {
                type: Boolean,
                required: false,
                default: false
            },
            discount: {
                type: Number,
                required: false,
                default: 0
            },
            priceAfterDiscount: {
                type: Number,
                required: false,
                default: 0
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

userSchema.methods.addToCart = (book) => {
    let updatedCart = this.cart ? [...this.cart.items] : []
    updatedCart.books.push(book)
    this.cart = updatedCart;
    return this.save()
}

userSchema.methods.removeFromCart = (deletedBook) => {
    const updatedCart = this.cart.books.filter(book => {
        book.toString() != deletedBook.toString()
    })
    this.cart = updatedCart;
    return this.save()
}

userSchema.methods.clearCart = ()=>{
    this.cart.books = []
    return this.save();
}

module.exports = mongoose.model("User", userSchema);
