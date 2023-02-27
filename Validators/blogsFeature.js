const addValidator = (req, res, next) => {
    const { blogsId, title, desc } = req.body;

    if (!blogsId) {
        return res.json({
            success: false,
            error: "blogs ID is required",
        });
    }

    if (!title) {
        return res.json({
            success: false,
            error: "Title is required",
        });
    }

    if (!desc) {
        return res.json({
            success: false,
            error: "Description is required",
        });
    }

    next();
};

module.exports = {
    addValidator,
};