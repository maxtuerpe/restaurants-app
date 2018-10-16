const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan')
const restaurantController = require('./controllers/restaurants')
const foodController = require('./controllers/food')
require('./db/db');
app.use(morgan('short'));
app.use(methodOverride('_method'));
app.use(bodyParser({urlencoded: true, extended: false}))


app.get('/', (req, res) => {
    res.render('index.ejs');
})
app.use('/restaurants', restaurantController)
app.use('/foods', foodController)






app.listen(3000, () => {
    console.log('running on port 3000');
})