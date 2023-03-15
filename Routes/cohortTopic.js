const router = require("express").Router();

const { addValidator } = require("../Validators/cohortTopic");
const { add, getByCourse, get, update } = require("../Controllers/cohortTopic");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/update", adminAuth, addValidator, update);
router.get("/course/:courseId", getByCourse);
router.get("/:topicId", get);

module.exports = router;
