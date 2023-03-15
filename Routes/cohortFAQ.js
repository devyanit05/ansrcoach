const router = require("express").Router();

const { addValidator } = require("../Validators/cohortFAQ");
const { add, get, update } = require("../Controllers/cohortFAQ");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/create", adminAuth, addValidator, update);
router.get("/course/:courseId", get);

module.exports = router;
