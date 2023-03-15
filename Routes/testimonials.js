const router = require("express").Router();

const { addValidator } = require("../Validators/testimonials");
const { addTest, getTest, updateTest } = require("../Controllers/testimonials");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, addTest);
router.put("/updateTest", adminAuth, addValidator, updateTest);
router.get("/:testId", getTest);

module.exports = router;
