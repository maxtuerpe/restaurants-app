const express = require('express');
const Food = require('../models/food');
const router = express.Router();

router.get('/', (req, res) => {
    Food.find({}, (err, foods) => {
        res.render('food/index.ejs', {foods});
    })        
})
router.get('/new', (req, res) => {
    res.render('food/new.ejs')
});
router.post('/', (req, res) => {
    Food.create(req.body, (err, food) => {
        res.redirect('/foods');
    })
})
router.get('/:id', (req, res) => {
    Food.findById(req.params.id, (err, food)=>{
        console.log(food)
        res.render('food/show.ejs', {food});
    }) 
})
module.exports = router;
