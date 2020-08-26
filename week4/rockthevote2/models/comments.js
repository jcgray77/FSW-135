const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentbody: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema);