const express = require('express');

// controllers
const { parse } = require('@controllers/files/files');

// middleware
const fileExists = require('@middlewares/validations/files/files-exists.validation');

const router = express.Router();

router.post('/parse', fileExists, parse);

module.exports = router;
