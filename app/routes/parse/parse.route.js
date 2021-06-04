const express = require('express');

// controllers
const { parseCvByFile, parseCvByText } = require('@controllers/parse/parse');

// middleware
const fileExists = require('@middlewares/validations/files/files-exists.validation');
const mimetypeFileParseSupport = require('@middlewares/validations/files/files-mimetype.validation.js');
const fieldsExists = require('@middlewares/validations/require-fields/require-fields.validation.js');

const router = express.Router();

router.post('/parse/cv/file', fileExists, mimetypeFileParseSupport, parseCvByFile);
router.post('/parse/cv/text', fieldsExists(['text']), parseCvByText);

module.exports = router;
