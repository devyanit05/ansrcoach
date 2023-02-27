const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    img: String,
    desc: String,
});

module.exports = mongoose.model('Blogs', blogsSchema);