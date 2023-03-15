const router = require("express").Router();

const { addValidator } = require("../Validators/cohortSubject");
const { add, update, getByCourse, get } = require("../Controllers/cohortSubject");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/create", adminAuth, addValidator, update);
router.get("/course/:courseId", getByCourse);
router.get("/:subjectId", get);

module.exports = router;
