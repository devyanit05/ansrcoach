const Blogs = require('../Models/blogs');


const postblogs = async (req, res) => {
    const dbmessage = req.body
    Blogs.create(dbmessage, (err, data) => {
        if (err) {
            res.send(err);
        } else {

            res.send(data);
        }
    })
}

const updateBlog = async (req, res) => {
    const { blogId, title = null, subtitle = null, desc = null } = req.body
    const blog = await Blogs.findById(blogId);

    if (blog) {
        if (title) {
            await blog.update({ title })
            res.send("Blog title updated successfully:" + blog)
        } else if (subtitle) {
            await blog.update({ desc })
            res.send("Blog subtitle updated successfully:" + blog)
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

const getblogs = async (req, res) => {
    Blogs.find({}, (err, Blogs) => {
        if (err) {
            res.send(err);
        }
        return res.status(200).json(Blogs);
    });
}


const get = async (req, res) => {
    const { blogsId } = req.params;

    try {
        const blogs = await Blogs.findById(blogsId);

        if (blogs) {
            return res.json({
                success: true,
                message: "Blog fetched successfully",
                blogs,
            });
        } else {
            return res.json({
                success: false,
                error: "Blog not found",
            });
        }
    } catch (error) {
        return res.json({ success: false, error });
    }
};



module.exports = {
    postblogs,
    updateBlog,
    getblogs,
    get
};