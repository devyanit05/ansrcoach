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
    getblogs,
    get
};