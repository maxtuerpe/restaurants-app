const mongoose = require('mongoose');
const Foods = require('./food');

const restaurantSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    slogan: String,
    foods: [Foods.schema]
})


module.exports = mongoose.model('restaurant', restaurantSchema);