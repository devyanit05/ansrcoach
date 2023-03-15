const router = require("express").Router();

const { addValidator } = require("../Validators/blogsFeature");
const { add, update, get } = require("../Controllers/blogsFeature");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("update", adminAuth, update)
router.get("/blogs/:blogsId", get);

module.exports = router;