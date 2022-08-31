const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    genre:[{type:mongoose.Schema.Types.ObjectId,required:false}]
})

const Genre = mongoose.model("Genre",genreSchema);

module.exports = Genre ;