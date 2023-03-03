const Blogs = require('../Models/blogs');

const searchBlog = async (req, res) => {
    //  searchTerm
    try {
        const searchTerm = req.body.searchTerm;
        const blog = await Blogs.find(
            {
                $text: {
                    $search: searchTerm,
                    $diacriticSensitive: true
                }
            }
        );
        // $text: { $search: searchTerm, $diacriticSensitive: true }
        // res.render('search', { title: 'Projecto-Search', problem });
        res.json({ blog: blog });
    } catch (error) {
        res.send({ message: error.message || "Error Occured" });
    }
}

module.exports = searchBlog;