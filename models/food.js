const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    tasty: Boolean,
})


module.exports = mongoose.model('food', foodSchema);