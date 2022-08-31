const router = require("express").Router();
let Album = require("../models/album.model.js");

 //This is the search function
 //User can search albums by title,artist or genre
 router.route("/search/:key").get(async(req,res)=>{
  
     let data = await Album.find(
         {
             "$or": [
                 {title:{$regex:req.params.key}},
                 {artist:{$regex:req.params.key}},
                 {genre:{$regex:req.params.key}}
             ]
         }
     );
     res.send(data); 
})

//This route will insert new albums
router.route("/add").post((req,res)=>{
    const title = req.body.title;
    const artist = req.body.artist;
    const genre = req.body.genre;
    const releasedDate = req.body.releasedDate;


    const newAlbum = new Album({
          
         title,
         artist,
         genre,
         releasedDate
    })

    newAlbum.save().then(() =>{ //use then,catch for error handling
        res.json("Album Added")
    }).catch((err)=>{
        console.log(err);
    })

})


//this route will fetch all the albums
router.route("/").get((req,res)=>{
    Album.find().then((Albums)=>{
        res.json(Albums)
    }).catch((err)=>{
        console.log(err);
    })
})

//this route will fetch albums by id
router.route("/get/:id").get(async(req,res)=>{
    let albumId = req.params.id;
    const album = await Album.findById(albumId).then((album)=>{
        res.status(200).send({status:"Album Fetched", album});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetch Album",error:err.message});
    })
})

//this route will update the albems
router.route("/update/:id").put(async (req,res)=>{
    let albumId = req.params.id;
    const {title,artist,genre,releasedDate} = req.body;

    const updateAlbum = {
        title,
        artist,
        genre,
        releasedDate
    }

    const update = await Album.findByIdAndUpdate(albumId,updateAlbum).then(()=>{
        res.status(200).send({status:"Album updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error while updating data",error:err.message});
    })

})

//this route will delete the albums
router.route("/delete/:id").delete(async(req,res)=>{
    let albumId = req.params.id;
    await Album.findByIdAndDelete(albumId).then(()=>{
        res.status(200).send({status:"Album deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error while deleting the album",error:err.message});

    })
})


module.exports=router;



