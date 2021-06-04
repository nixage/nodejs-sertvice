const { parseByFile } = require('@services/parser/parser.service');
const { resumeParserByText } = require('@utils/resume-parser');

const parseCvByFile = async (req, res) => {
  try {
    const file = req.files.file;
    /* {valid: boolean, filePath: '',} */
    const data = await parseByFile(file);
    return res.json({ valid: true, data });
  } catch (err) {
    return res.json(err);
  }
};

const parseCvByText = async (req, res) => {
  try {
    const data = await resumeParserByText(req.body.text);
    return res.json({ valid: true, data });
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  parseCvByFile,
  parseCvByText,
};
