const pdfParser = require('pdf-parse');
const fs = require('fs/promises');

module.exports = async (path) => {
  const data = await fs.readFile(path);
  return pdfParser(data).then((res) => res.text);
};
