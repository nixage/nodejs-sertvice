const { phonesCode } = require('@dictionary/phone-dictionary.json');

module.exports = (text = '') => {
  const uniqCodes = [...new Set(phonesCode)];
  let findPhone = null;
  for (let i = 0; i < uniqCodes.length; i++) {
    const code = uniqCodes[i].replace(/\+(.*)/, '\\+$1');
    const re = new RegExp(code);
    if (re.test(text)) {
      const rePhone = new RegExp(`${code}\\d+`);
      findPhone = rePhone.exec(text)[0];
      break;
    }
  }
  if (findPhone === null) findPhone = /(\d{8,12})[\s\.A-Z]?\b/.exec(text)[1];

  return findPhone;
};
