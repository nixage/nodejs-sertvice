const pdfParser = require('./pdf-reader/index');
const parser = require('./parser');

module.exports = async (pathToFile, fileType) => {
  let text;
  switch (fileType) {
    case 'application/pdf':
      text = await pdfParser(pathToFile);
      break;
  }
  const obj = {
    name: parser.nameParser(text),
    email: parser.emailParser(text),
    phone: parser.phoneParser(text),
  };
  return obj;
};
