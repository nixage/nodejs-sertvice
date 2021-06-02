const { saveFile } = require('@services/files/files.service');

const parse = async (req, res) => {
  const file = req.files.file;
  const resultSaveFile = await saveFile(file);
  return res.json(resultSaveFile);
};

module.exports = {
  parse,
};
