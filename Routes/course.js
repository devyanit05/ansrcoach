const router = require("express").Router();

const { addValidator } = require("../Validators/course");
const { add, get, update } = require("../Controllers/course");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/update", adminAuth, addValidator, update);
router.get("/:courseId", get);

module.exports = router;
