const Cohort = require("../Models/cohort");

const add = async (req, res) => {
    const { sClass, duration, price, offer } = req.body;

    try {
        const cohort = await Cohort.findOne({ sClass });

        if (cohort) {
            return res.json({
                success: false,
                message: "Course already exists",
            });
        } else {
            const cohort = await Cohort.create({
                sClass,
                duration,
                price,
                offer,
            });

            return res.json({
                success: true,
                message: "Course added",
                _id: cohort._id,
            });
        }
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, sClass = null, duration = null, price = null, offer = null } = req.body;

    const course = await Cohort.findById(courseId);

    if (course) {
        await course.updateOne({ sClass, duration, price, offer });
        res.send("Updated successfully");
    } else {
        res.send(
            "Course not found"
        )
    }
}

const get = async (req, res) => {
    const { sClass } = req.params;

    try {
        const cohort = await Cohort.findOne({ sClass });

        if (cohort) {
            return res.json({
                success: true,
                message: "Course fetched successfully",
                course: cohort,
            });
        } else {
            return res.json({
                success: false,
                error: "Course not found",
            });
        }
    } catch (error) {
        return res.json({ success: false, error });
    }
};

module.exports = {
    add,
    update,
    get,
};
