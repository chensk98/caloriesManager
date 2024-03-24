const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true

    },
    birthday: {
        type: String,
        required: true

    },

},{ versionKey: false });

const user = mongoose.model('users',usersSchema);

module.exports = user;