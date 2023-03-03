const router = require("express").Router();

const { addValidator } = require("../Validators/blogsFeature");
const { add, get } = require("../Controllers/blogsFeature");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.get("/blogs/:blogsId", get);

module.exports = router;