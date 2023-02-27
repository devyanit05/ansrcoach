const router = require("express").Router();
const { postblogs, getblogs, get } = require('../Controllers/blogs')

router.post("/postblogs", postblogs);
router.get("/getblogs", getblogs);
router.get("/:blogsId", get);

module.exports = router;