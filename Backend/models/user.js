const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    type: {
        type: String,
        required: true,
        default: 'user'
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    boughtBooks: {
        type: [mongoose.Types.ObjectId],
        required: true,
        default:[]
    },
    bio: {
        type: String,
        required: false,
    },
    ownedBooks: {
        type: [mongoose.Types.ObjectId],
        required: true,
        ref: 'Book',
        default:[]
    },
    cart: {
        priceBeforeDiscount: {
            type: Number,
            required: true,
            default: 0
        },
        discount:{
            type:Number,
            required:false
        },
        priceAfterDiscount:{
            type:Number,
            required:false
        },
        books: [mongoose.Types.ObjectId]
    }
},
    { timestamps: true }
)

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);