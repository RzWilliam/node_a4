const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const rateLimiterUsingThirdParty = require("../middleware/rateLimiter");

router.post('/create', rateLimiterUsingThirdParty.rate ,userController.createUser)
router.get('/', userController.getUsers)
router.post('/login', rateLimiterUsingThirdParty.rate ,userController.loginUser)

module.exports = router;