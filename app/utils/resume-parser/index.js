const pdfParser = require('./pdf-reader');
const parser = require('./parser');
const { supportMimetype } = require('./config/config');

const getFileType = (path) => {
  const fileTypeRe = /.(\w+)$/.exec(path);

  if (fileTypeRe !== null) {
    const mimetype = supportMimetype.find((type) => type === fileTypeRe[1]);
    if (!mimetype) throw Error('File type not supported');
    return mimetype;
  }
  throw Error('File type not supported');
};

const parseCvText = (text) => {
  const name = parser.nameParser(text);
  return {
    name: name,
    firstName: name.split(/\s/)[1],
    lastName: name.split(/\s/)[0],
    email1: parser.emailParser(text),
    phoneCell: parser.phoneParser(text),
    keySkills: parser.skillsParser(text),
  };
};

const resumeParserByFile = async (pathToFile) => {
  let text;
  const fileType = getFileType(pathToFile);
  switch (fileType) {
    case 'pdf':
      text = await pdfParser(pathToFile);
      break;
  }
  return parseCvText(text);
};

const resumeParserByText = async (text) => {
  return parseCvText(text);
};

module.exports = {
  resumeParserByFile,
  resumeParserByText,
};
