const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
const albumRouter = require("./routes/album.route.js") ;
const genreRouter = require("./routes/genre.route.js");

const app = express();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}, err => {
    if(err) throw err;
   
        console.log('Connected to MongoDB!!!')
     }) 


app.use("/album",albumRouter);    
app.use("/genre",genreRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port ${PORT}`)
});
