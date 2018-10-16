const express = require('express');
const Restaurant = require('../models/restaurants');
const router = express.Router();

router.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants)=>{
        res.render('restaurants/index.ejs', {restaurants});
    })   
})
router.get('/new', (req, res) => {
    res.render('restaurants/new.ejs')
});
router.post('/', (req, res) => {
    Restaurant.create(req.body, (err, restaurant) => {
        res.redirect('/restaurants')
    })
});
router.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant)=>{
        console.log(restaurant)
        res.render('restaurants/show.ejs', {restaurant});
    }) 
})
router.delete('/:id', (req, res)=>{
    Restaurant.findByIdAndRemove(req.params.id, (err, restaurant) => {
        res.redirect('/restaurants')
    })
})
router.get('/:id/edit', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant)=> {
        res.render('restaurants/edit.ejs', {restaurant});
    })
})
router.put('/:id', (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, (err, restaurant) => {
        res.redirect(`/restaurants/${req.params.id}`)
    })
})

module.exports = router;

