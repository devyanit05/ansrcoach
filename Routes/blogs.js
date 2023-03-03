const router = require("express").Router();
const { postblogs, getblogs, get } = require('../Controllers/blogs')
const searchBlog = require('../Controllers/blogSearch');
const { adminAuth } = require("../Middlewares/auth");

router.post("/postblogs", adminAuth, postblogs);
router.get("/getblogs", getblogs);
router.get("/:blogsId", get);

router.post("/search", searchBlog);

module.exports = router;