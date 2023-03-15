const router = require("express").Router();

const { addValidator } = require("../Validators/courseFeature");
const { add, get, update } = require("../Controllers/courseFeature");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/update", adminAuth, addValidator, update);
router.get("/course/:courseId", get);

module.exports = router;
