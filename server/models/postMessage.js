const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    message: {
        type:String,
        required: true
    },
    creator: {
        type:String,
        required: true
    },
    tags: {
        type:[String],
        required: true
    },
    selectedFile: String,
    likeCount:{ 
        type: Number,
        default: 0
    }
}, {timestamps: true})

module.exports = mongoose.model("PostMessage", postSchema)