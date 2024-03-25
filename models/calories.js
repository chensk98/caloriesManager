//Chen Skanderany, id: 206508541
//Mili Segal, id: 208297333

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calorieSchema = new Schema({

    user_id: {
        type: Number,
        required: true
    },
    year: {
        type:Number ,
        required: true

    },
    month: {
        type: Number,
        required: true

    },
    day: {
        type: Number,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    category: {
        type: String,
        required: true,
        enum: ['breakfast','lunch','dinner','other']

    },
    amount: {
        type: Number,
        required: true
    }
},{ versionKey: false });

const calories = mongoose.model('calories',calorieSchema);

module.exports = calories;