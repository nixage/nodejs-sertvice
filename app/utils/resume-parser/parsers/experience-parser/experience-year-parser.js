const dictionary = require('../../dictionary/dictionary');

module.exports = (text) => {
  let year = /(\d{4}|\d{2,4})\D?$/.exec(text.replace(/\s/g, ''))?.[1];
  year && year.length === 2 ? (year = `20${year}`) : '';

  if (!year) year = dictionary.specificDate.find((date) => new RegExp(date.re, 'i').test(text))?.number;

  return year || '';
};
