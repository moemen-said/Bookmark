const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
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
        type: String,
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
    priceAfterDiscount: {
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
        type: String,
        required: true
    },
    usersReview: {
        reviews:[
            {
                reviewerId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
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
                },
                reviewDate: {
                    type: Date,
                    required: true
                }
            }
        ]
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Book', bookSchema);