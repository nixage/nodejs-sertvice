const { mimetypeFileParseSupport } = require('@config/config');

module.exports = (req, res, next) => {
  if (!mimetypeFileParseSupport.includes(req.files.file.mimetype)) {
    return res.status(404).json({ valid: false, err: 'Mimetype file not supported' });
  }
  next();
};
