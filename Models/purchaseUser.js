const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dashboardSchema = new mongoose.Schema({
    rUserId: {
        type: String,
        required: true,
    },
    rPaymentId: {
        type: String,
        required: true,
        unique: true,
    },
    sClass: {
        type: Number,
        required: true,
    },
    lastDate: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Dashboard", dashboardSchema);
