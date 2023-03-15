const Course = require("../Models/course");

const add = async (req, res) => {
    const { type, name, tagline, tagline2, targetClass } = req.body;

    try {
        const course = await Course.create({
            type,
            name,
            tagline,
            tagline2,
            targetClass,
        });
        console.log(course)

        return res.json({
            success: true,
            message: "Course added",
            _id: course._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, type = null, name = null, tagline = null, tagline2 = null, targetClass = null } = req.body;

    const course = await Course.findById(courseId);

    if (course) {
        await course.updateOne({ type, name, tagline, tagline2, targetClass });
        res.send("Updated successfully");
    } else {
        res.send(
            "Course not found"
        )
    }
}

const get = async (req, res) => {
    const { courseId } = req.params;

    try {
        const course = await Course.findById(courseId);

        if (course) {
            return res.json({
                success: true,
                message: "Course fetched successfully",
                course,
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
