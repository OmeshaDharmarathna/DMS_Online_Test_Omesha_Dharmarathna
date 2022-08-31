const router = require("express").Router();
const Genre = require('../models/genre.model.js');

router.route("/").get((req,res)=>{
    Genre.find().then((Genre)=>{
        res.json(Genre)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;