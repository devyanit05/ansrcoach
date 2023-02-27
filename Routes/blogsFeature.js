const router = require("express").Router();

const { addValidator } = require("../Validators/blogsFeature");
const { add, get } = require("../Controllers/blogsFeature");

router.post("/create", addValidator, add);
router.get("/blogs/:blogsId", get);

module.exports = router;