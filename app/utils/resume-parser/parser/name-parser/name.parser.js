const dictionary = require('../../dictionary/dictionary');
const findFirstIndexByTitles = require('../../helpers/find-index-by-title');

const sliceToIndex = (text, from, to) => text.slice(from, to);

const parseName = (text) => {
  const index = findFirstIndexByTitles(text);
  const newText = index !== -1 ? sliceToIndex(text, 0, index) : text;
  let name = new RegExp(dictionary.regexp.name, dictionary.regexp.nameFlags).exec(`${newText}`);
  name === null
    ? (name = new RegExp(dictionary.regexp.nameIgnoreCase, dictionary.regexp.nameFlags).exec(`${newText}`))
    : '';
  return name !== null ? name[1] : '';
};

module.exports = (text = '') => (text.length ? parseName(text) : '');
