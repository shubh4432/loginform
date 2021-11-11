const express = require('express');
const authcontroller = require('./../controller/authController');
const router = express.Router();

router.post('/', authcontroller.signup);

module.exports = router;