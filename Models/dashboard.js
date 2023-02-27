const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashboardSchema = new mongoose.Schema({
    countdown: {
        type: Number,
        ref: "Course",
        required: true,
    },
    sClass: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    offer: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Dashboard", dashboardSchema);
