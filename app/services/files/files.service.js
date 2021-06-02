const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const pathToFiles = process.cwd() + process.env.FILES_PATH;

const saveFile = async (file) => {
  const uniqDirName = pathToFiles + `/${Date.now()}`;
  const pathFile = uniqDirName + `/${file.name}`;
  await fs.promises.mkdir(uniqDirName, { recursive: true });
  return await fs.promises.writeFile(pathFile, file.data);
};

module.exports = { saveFile };
