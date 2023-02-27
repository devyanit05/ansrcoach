const BlogsFeature = require("../Models/blogsFeature");

const add = async (req, res) => {
    const { blogsId, title, desc } = req.body;

    try {
        const blogsFeature = await BlogsFeature.create({
            blogsId,
            title,
            desc,
        });

        return res.json({
            success: true,
            message: "Feature added",
            _id: blogsFeature._id,
        });
    } catch (error) {
        return res.json({ success: false, error });
    }
};

const get = async (req, res) => {
    const { blogsId } = req.params;

    try {
        const features = await BlogsFeature.find({ blogsId });

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
    get,
};