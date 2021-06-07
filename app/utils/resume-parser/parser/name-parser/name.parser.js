const dictionary = require('../../dictionary/dictionary');
const findLastIndexPersonalInfoTitle = require('../../helpers/find-last-index-personal-info');

const titles = [...dictionary.title.personalInfo];

const getIndexAfterPersonalInfoTitle = (text) =>
  text.search(new RegExp(titles.map((val) => `(?<=${val}).`).join('|'), 'i'));

const sliceToIndex = (text, from, to) => text.slice(from, to);

const parseName = (text) => {
  const fromIndex = getIndexAfterPersonalInfoTitle(text);
  const toIndex = findLastIndexPersonalInfoTitle(text);
  const newText = toIndex !== -1 ? sliceToIndex(text, fromIndex === -1 ? 0 : fromIndex, toIndex) : text;
  let name = new RegExp(dictionary.regexp.nameUpperCase, dictionary.regexp.nameFlags).exec(`${newText}`);
  name === null ? (name = new RegExp(dictionary.regexp.name, dictionary.regexp.nameFlags).exec(`${newText}`)) : '';
  return name !== null ? name[1] : '';
};

module.exports = (text = '') => (text.length ? parseName(text) : '');
