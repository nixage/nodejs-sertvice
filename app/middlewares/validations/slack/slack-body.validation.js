module.exports = (req, res, next) => {
  if (!req.body.channel || !req.body.message || !req.body.message.ts) {
    return res
      .status(400)
      .json({ valid: false, err: 'Body content is not full' });
  }
  next();
};
