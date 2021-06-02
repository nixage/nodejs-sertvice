const fs = require('fs/promises');
const dotenv = require('dotenv');
dotenv.config();
const pathToFiles = process.cwd() + process.env.FILES_PATH;

const saveFile = async (file) => {
  try {
    const filePath = pathToFiles + `/${Date.now()}_${file.name}`.replace(/\s/gim, '');
    await fs.mkdir(pathToFiles, { recursive: true });
    await fs.writeFile(filePath, file.data);
    return { valid: true, filePath };
  } catch (err) {
    throw { valid: false, err };
  }
};

const removeFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    return { valid: true };
  } catch (err) {
    throw { valid: false };
  }
};

module.exports = { saveFile, removeFile };
