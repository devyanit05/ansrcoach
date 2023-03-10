const CohortSubject = require("../Models/cohortSubject");

const add = async (req, res) => {
    const { courseId, board, name, exclusive, backgroundColor, color, image } =
        req.body;

    try {
        const cohortSubject = await CohortSubject.create({
            courseId,
            board,
            name,
            exclusive,
            backgroundColor,
            color,
            image,
        });

        return res.json({
            success: true,
            message: "Subject added",
            _id: cohortSubject._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, board = null, name = null, exclusive = null, backgroundColor = null, color = null, image = null } = req.body;

    const course = await CohortSubject.findById(courseId);

    if (course) {
        await course.updateOne({ board, name, exclusive, backgroundColor, color, image });
        res.send("Updated successfully");
    } else {
        res.send(
            "CohortSubject not found"
        )
    }
}


const getByCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        const subjects = await CohortSubject.find({ courseId });

        return res.json({
            success: true,
            message: "Subjects fetched successfully",
            subjects,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const get = async (req, res) => {
    const { subjectId } = req.params;

    try {
        const subject = await CohortSubject.findById(subjectId);

        return res.json({
            success: true,
            message: "Subject fetched successfully",
            subject,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

module.exports = {
    add,
    update,
    getByCourse,
    get,
};
