const mongoose = require('mongoose');

const Schema = mongoose.schema;


const reviewSchema = new Schema({
    reviewerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    reviewerName: {
        type: String,
        required: true,
    },
    reviewerImgLink: {
        type: String,
        required: true,
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
        ref:'Category',
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
    description: {
        type: string,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    haveDiscount: {
        type: Boolean,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    priceAfterDicount: {
        type: Number,
        required: false
    },
    rate: {
        type: Number,
        required: true
    },
    noOfReviews: {
        type: Number,
        required: false,
        default: 0
    },
    imgLink: {
        type: string,
        required: true
    },
    usersReview: {
        type: [reviewSchema],
        required: false
    },
    authorsReview: {
        type: [reviewSchema],
        required: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema);