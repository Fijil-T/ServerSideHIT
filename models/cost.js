const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = require('./category');

const costSchema = new Schema({
    id: {
        type: String
    },
    user_id: {
        type: String,
        required: [true,'No user id']
    },
    year: {
        type: String,
        required: [true,'Please enter year']
    },
    month: {
        type: String,
        required: [true,'Please enter month']
    },
    day: {
        type: String,
        required: [true,'Please enter day']
    },
    Category: {
        type: String,
        required: true,
        enum: process.env.CATEGORIES_ALLOWED_VALUES.split(','),
        required: [true,'Please enter category']
    },
    sum: {
        type: Number,
        required: [true,'Please enter sum']
    },
    description: {
        type: String,
        required: [true,'Please enter description']
    },

});

module.exports = mongoose.model("Cost", costSchema);