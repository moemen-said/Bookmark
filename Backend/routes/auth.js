const express = require('express');

const authController = require('../controllers/auth');
const checkAuth = require('../middlewares/checkAuth');

const router = express.Router();

router.post('/userSignup', authController.userSignup)

router.post('/userLogin', authController.userLogin)

module.exports = router;