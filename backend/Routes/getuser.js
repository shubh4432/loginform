const express = require('express');
const router = express.Router();
const userController = require('./../controller/userController')
const authController = require('./../controller/authController')
// router.get('/', userController.getUser);
router.get('/', authController.isLoggedIn,userController.getMe, userController.getUser);
// router
//   .route('/:id')
//   .get(userController.getUser)

module.exports = router