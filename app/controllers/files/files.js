const { saveFile, removeFile } = require('@services/files/files.service');
const resumeParser = require('@utils/resume-parser');

const parse = async (req, res) => {
  try {
    const file = req.files.file;
    /* {valid: boolean, filePath: '',} */
    const resultSaveFile = await saveFile(file);
    const data = await resumeParser(resultSaveFile.filePath, file.mimetype);
    await removeFile(resultSaveFile.filePath);
    return res.json({ valid: true, data });
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  parse,
};
