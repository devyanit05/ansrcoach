const mongoose = require("mongoose");

const testimonials = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    image: {
   type: String, 
   required: true
    },
});

module.exports = mongoose.model("Testimonial", testimonials);
