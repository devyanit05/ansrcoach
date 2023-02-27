const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogsFeatureSchema = new mongoose.Schema({
    blogsId: {
        type: Schema.ObjectId,
        ref: "Course",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("BlogsFeature", blogsFeatureSchema);