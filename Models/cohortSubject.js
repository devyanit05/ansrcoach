const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cohortSubjectSchema = new mongoose.Schema({
    courseId: {
        type: Schema.ObjectId,
        ref: "Cohort",
        required: true,
    },
    board: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    exclusive: {
        type: Boolean,
        required: true,
    },
    backgroundColor: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model("Cohort Subject", cohortSubjectSchema);
