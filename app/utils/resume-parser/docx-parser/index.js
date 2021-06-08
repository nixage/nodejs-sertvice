const textract = require('textract');

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    textract.fromFileWithPath(path, (err, text) => {
      if (!err) resolve(text);
      reject(err);
    });
  });
};
