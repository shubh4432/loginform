const express = require('express');
const authcontroller = require('./../controller/authController');
const router = express.Router();

router.get('/', authcontroller.logout);

module.exports = router