const mongoose = require("mongoose")

const Image = mongoose.Schema({
    img:String
})

module.exports = mongoose.model("images",Image)