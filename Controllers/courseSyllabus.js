const CourseSyllabus = require("../Models/courseSyllabus");

const add = async (req, res) => {
    const { courseId, title, sClass } = req.body;

    try {
        const courseSyllabus = await CourseSyllabus.create({
            courseId,
            title,
            sClass,
        });

        return res.json({
            success: true,
            message: "Topic added",
            _id: courseSyllabus._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, sClass = null, title = null } = req.body;

    const course = await CourseSyllabus.findById(courseId);

    if (course) {
        await course.updateOne({ title, sClass });
        res.send("Updated successfully");
    } else {
        res.send(
            "Course Syllabus not found"
        )
    }
}

const get = async (req, res) => {
    const { courseId } = req.params;

    try {
        const syllabus = await CourseSyllabus.find({ courseId });

        return res.json({
            success: true,
            message: "Syllabus fetched successfully",
            syllabus,
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
