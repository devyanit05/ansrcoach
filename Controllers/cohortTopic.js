const CohortTopic = require("../Models/cohortTopic");

const add = async (req, res) => {
    const { courseId, subjectId, name, link } = req.body;

    try {
        const cohortTopic = await CohortTopic.create({
            courseId,
            subjectId,
            name,
            link
        });

        return res.json({
            success: true,
            message: "Topic added",
            _id: cohortTopic._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, subjectId = null, name = null } = req.body;

    const course = await CohortTopic.findById(courseId);

    if (course) {
        await course.updateOne({ subjectId, name });
        res.send("Updated successfully");
    } else {
        res.send(
            "CohortTopic not found"
        )
    }
}

const getByCourse = async (req, res) => {
    const { courseId } = req.params;

    try {
        const topics = await CohortTopic.find({ courseId });

        return res.json({
            success: true,
            message: "Topics fetched successfully",
            topics,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const get = async (req, res) => {
    const { topicId } = req.params;

    try {
        const topic = await CohortTopic.findById(topicId);

        return res.json({
            success: true,
            message: "Topic fetched successfully",
            topic,
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
