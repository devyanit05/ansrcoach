const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    img: String,
    desc: String,
});

blogsSchema.index({ title: "text", desc: "text", subtitle: "text" });

module.exports = mongoose.model('Blogs', blogsSchema);