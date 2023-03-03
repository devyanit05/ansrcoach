const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    rOrdererId: {
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
    deadline: {
        type: String,
        required: true,
    },
    paymentSuccessful: {
        type: Boolean,
        required: true,
    },
    userMobile: {
        type: Number,
    },
    trialEnded: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model("PurchaseUser", purchaseSchema);
