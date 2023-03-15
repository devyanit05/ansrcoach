const addValidator = (req, res, next) => {
    const { courseId, title, sClass } = req.body;

    if (!courseId) {
        return res.json({
            success: false,
            error: "Course ID is required",
        });
    }

    if (!title) {
        return res.json({
            success: false,
            error: "Title is required",
        });
    }

    if (!sClass) {
        return res.json({
            success: false,
            error: "Student class is required",
        });
    }

    next();
};

module.exports = {
    addValidator,
};
