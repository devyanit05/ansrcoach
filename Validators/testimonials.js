const addValidator = (req, res, next) => {
    const { name, intro, details } = req.body;

    if (!name) {
        return res.json({
            success: false,
            error: "Name is required",
        });
    }

    if (!intro) {
        return res.json({
            success: false,
            error: "Introduction is required",
        });
    }

    if (!details) {
        return res.json({
            success: false,
            error: "TDetails are required",
        });
    }

    next();
};

module.exports = {
    addValidator,
};
