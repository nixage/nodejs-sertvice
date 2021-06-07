const dictionary = require('../dictionary/dictionary');

const titles = [
  ...dictionary.title.experience,
  ...dictionary.title.skills,
  ...dictionary.title.education,
  ...dictionary.title.technology,
];

module.exports = (text) => text.search(new RegExp(titles.join('|'), 'i'));
