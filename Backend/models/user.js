const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        unique:true
    },
    boughtBooks: {
        type: [mongoose.Types.ObjectId],
        required: true,
        default: []
    },
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

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);