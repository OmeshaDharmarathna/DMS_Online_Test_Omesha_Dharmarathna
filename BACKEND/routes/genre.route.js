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
//To implement the requirement which shows in the problem pdf, about connection two collections
//In album, there should be an option to choose one from pop,rock,classic,jazz,hip-hop.
//Then it will be stored in the genre collection.
//Then we can fetch all albums related to each category seperately.