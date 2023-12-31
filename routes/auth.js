const express = require('express');

const authController =require('../controller/signup')

const router = express.Router();

router.get('/signup',authController.getSignup);
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin);


router.post('/signup', authController.postSignup);
router.post('/logout', authController.postLogout);

module.exports = router;