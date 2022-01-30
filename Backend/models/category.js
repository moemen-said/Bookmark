const mongoose = require('mongoose');

const Schema = mongoose.schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Category', categorySchema);