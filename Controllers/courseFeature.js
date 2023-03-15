const CourseFeature = require("../Models/courseFeature");

const add = async (req, res) => {
    const { courseId, title, desc } = req.body;

    try {
        const courseFeature = await CourseFeature.create({
            courseId,
            title,
            desc,
        });

        return res.json({
            success: true,
            message: "Feature added",
            _id: courseFeature._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, title = null, desc = null } = req.body;

    const course = await CourseFeature.findById(courseId);

    if (course) {
        await course.updateOne({ title, desc });
        res.send("Updated successfully");
    } else {
        res.send(
            "Course Feature not found"
        )
    }
}

const get = async (req, res) => {
    const { courseId } = req.params;

    try {
        const features = await CourseFeature.find({ courseId });

        return res.json({
            success: true,
            message: "Features fetched successfully",
            features,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

module.exports = {
    add,
    update,
    get,
};
