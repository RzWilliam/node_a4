const express = require("express");
const router = express.Router();
const pkmController = require("../controllers/PkmController");
const auth = require("../middleware/auth");
const rateLimiterUsingThirdParty = require("../middleware/rateLimiter");

router.post("/",rateLimiterUsingThirdParty.rate, pkmController.create);
router.get("/", pkmController.findAll);
router.delete("/:id", auth.auth, pkmController.deleteOne);
router.put("/:id", pkmController.updateOne);

module.exports = router;
