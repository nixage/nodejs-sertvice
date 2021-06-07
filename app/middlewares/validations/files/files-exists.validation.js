module.exports = (req, res, next) => {
  if (!req.files || !req.files.file) return res.status(404).json({ valid: false, err: 'File not found' });
  next();
};
