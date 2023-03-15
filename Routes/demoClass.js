const router = require("express").Router();

const { addValidator } = require("../Validators/demoClass");
const { add, get, update } = require("../Controllers/demoClass");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.post("/create", adminAuth, addValidator, update);
router.get("/course/:courseId", get);

module.exports = router;
