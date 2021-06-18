const dictionary = require('../../dictionary/dictionary');

module.exports = (text) => {
  let num = dictionary.months.find((month) => new RegExp(month.re, 'i').test(text))?.number;
  if (!num) num = /(\d{1,2})/.exec(text)?.[0];
  if (num?.length === 1) num = '0' + num;
  return num || '';
};
