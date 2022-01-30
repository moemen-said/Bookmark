const mongoose = require('mongoose');

const Schema = mongoose.schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    noOfBooks: {
        type: Number,
        required: true,
        default: 0
    },
    books: {
        type: [mongoose.Types.ObjectId],
        required: true,
        default: []
    },
    social: [{
        name: String,
        link: String
    }],
    cart: {
        totalPrice: {
            type: Number,
            required: true,
            default: 0
        },
        books: [mongoose.Types.ObjectId]
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Author', authorSchema);