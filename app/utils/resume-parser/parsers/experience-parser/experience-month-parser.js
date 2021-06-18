const dictionary = require('../../dictionary/dictionary');

module.exports = (text) => {
  let month = dictionary.months.find((month) => new RegExp(month.re, 'i').test(text))?.number;
  if (!month) month = /(\d{1,2})/.exec(text)?.[0];
  if (month?.length === 1) month = '0' + month;
  return month || '';
};
