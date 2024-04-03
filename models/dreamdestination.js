const mongoose = require("mongoose")
const dreamdestinationSchema = mongoose.Schema({
    destinationname : String,
    location : String, 
    rating : Number
})
module.exports = mongoose.model("dreamdestination", 
dreamdestinationSchema)