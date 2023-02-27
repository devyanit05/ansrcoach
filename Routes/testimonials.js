const router = require("express").Router();

const { addValidator } = require("../Validators/testimonials");
const { addTest, getTest } = require("../Controllers/testimonials");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, addTest);
router.get("/:testId", getTest);

module.exports = router;
