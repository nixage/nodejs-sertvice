module.exports = (fields = []) => {
  return (req, res, next) => {
    if (fields && !fields.every((val) => req.body.hasOwnProperty(val)))
      return res.status(404).json({ valid: false, err: `Fields is required: ${fields.join(', ')}` });
    next();
  };
};
