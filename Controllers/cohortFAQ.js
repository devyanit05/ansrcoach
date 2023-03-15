const CohortFAQ = require("../Models/cohortFAQ");

const add = async (req, res) => {
    const { courseId, question, answer } = req.body;

    try {
        const cohortFAQ = await CohortFAQ.create({
            courseId,
            question,
            answer,
        });

        return res.json({
            success: true,
            message: "FAQ added",
            _id: cohortFAQ._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const update = async (req, res) => {
    const { courseId, question = null, answer = null } = req.body;

    const course = await CohortFAQ.findById(courseId);

    if (course) {
        await course.updateOne({ question, answer });
        res.send("CohortFAQ Updated successfully");
    } else {
        res.send(
            "CohortFAQ not found"
        )
    }
}

const get = async (req, res) => {
    const { courseId } = req.params;

    try {
        const faqs = await CohortFAQ.find({ courseId });

        return res.json({
            success: true,
            message: "FAQs fetched successfully",
            faqs,
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
