const { phonesCode } = require('../../dictionary/phones/phones.json');

const findPhoneByCountryCode = (text = '') => {
  const uniqCodes = [...new Set(phonesCode)];
  let findPhone = '';
  for (let i = 0; i < uniqCodes.length; i++) {
    const code = uniqCodes[i].replace(/\+(.*)/, '\\+$1');
    const phones = new RegExp(`${code}\\d+`).exec(text);
    if (phones !== null) {
      findPhone = phones[0];
      break;
    }
  }
  return findPhone;
};

const findPhoneWithOutCountryCode = (text = '') => {
  const withOutCode = /(\d{8,12})[\s\.A-Z]?\b/.exec(text);
  return (findPhone = withOutCode ? withOutCode[1] : '');
};

module.exports = (text = '') => {
  let findPhone = findPhoneByCountryCode(text);

  if (!findPhone) {
    findPhone = findPhoneWithOutCountryCode(text);
  }

  return findPhone;
};
