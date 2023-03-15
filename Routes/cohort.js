const router = require("express").Router();

const { addValidator } = require("../Validators/cohort");
const { add, update, get } = require("../Controllers/cohort");
const { adminAuth } = require("../Middlewares/auth");

router.post("/create", adminAuth, addValidator, add);
router.put("/update", adminAuth, update);
router.get("/:sClass", get);

module.exports = router;
