const router = require("express").Router();

const { addValidator } = require("../Validators/courseSyllabus");
const { add, get, update } = require("../Controllers/courseSyllabus");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/update", adminAuth, addValidator, update);
router.get("/course/:courseId", get);

module.exports = router;
