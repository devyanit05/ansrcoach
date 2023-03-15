const Testimonial = require('../Models/testimonials');

const addTest = async (req, res) => {
    const { name, intro, details } = req.body;

    try {
        const testimonial = await Testimonial.create({
            name,
            intro,
            details,
        });

        return res.json({
            success: true,
            message: "Testimonial added",
            _id: testimonial._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const updateTest = async (req, res) => {
    const { testId, name = null, intro = null, details = null } = req.body;

    const course = await Testimonial.findById(testId);

    if (course) {
        await course.updateOne({ name, intro, details });
        res.send("Updated successfully");
    } else {
        res.send(
            "Course not found"
        )
    }
}

const getTest = async (req, res) => {
    const { testId } = req.params;

    try {
        const testimonial = await Testimonial.findById(testId);

        if (testimonial) {
            return res.json({
                success: true,
                message: "Testimonial found successfully",
                testimonial,
            });
        } else {
            return res.json({
                success: false,
                error: "Testimonial not found",
            });
        }
    } catch (error) {
        return res.json({ success: false, error });
    }
};

module.exports = {
    addTest,
    updateTest,
    getTest,
};