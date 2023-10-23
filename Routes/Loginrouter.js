const express = require('express');
const LoginData = require('../controller/login');
const router = express.Router();

router
    .post('/',LoginData.create)
    .post('/:id',LoginData.check)

exports.router = router;

