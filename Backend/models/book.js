const mongoose = require('mongoose');

const Schema = mongoose.schema;

const userReviewSchema = new Schema({
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    reviewRate: {
        type: Number,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const authorsReviewSchema = new Schema({
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    reviewRate: {
        type: Number,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    datePuplished: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Boolean,
        required: true
    },
    priceAfterDicount: {
        type: Number,
        required: false
    },
    rate: {
        type: Number,
        required: true
    },
    usersReview: {
        type: [userReviewSchema],
        required: false
    },
    authorsReview: {
        type: [authorsReviewSchema],
        required: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema);