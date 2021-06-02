const { firstNamesMale } = require('@dictionary/male-first-names-dictionary.json');
const { firstNamesFemale } = require('@dictionary/female-first-names-dictionary.json');
const logger = require('@utils/logger');

const findFirstName = (arr, text) => {
  let findName = '';
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i];
    const re = new RegExp(`\\b${name}\\b`);
    const find = re.exec(text);
    if (find !== null) {
      findName = find[0];
      break;
    }
  }
  return findName;
};

module.exports = (text = '') => {
  let name = findFirstName(firstNamesMale, text);

  if (!name) name = findFirstName(firstNamesFemale, text);

  logger.log({
    level: 'info',
    message: `${name ? `Find name ${name}` : 'Name not found'}`,
  });

  return name;
};
