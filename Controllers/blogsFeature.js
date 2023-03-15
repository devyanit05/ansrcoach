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

const update = async (req, res) => {
    const { blogId, title = null, desc = null } = req.body
    const blog = await Blogs.findById(blogId);

    if (blog) {
        if (title) {
            await blog.update({ title })
            res.send("Blog title updated successfully:" + blog)
        } else if (desc) {
            await blog.update({ desc })
            res.send("Blog desc updated successfully:" + blog)
        } else {
            await blog.update({ title, desc })
            res.send("Blog title and desc updated successfully:" + blog)
        }
    } else {
        res.json({
            status: 404,
            message: 'Blog not found',
        })
    }
}

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
    update,
    get,
};