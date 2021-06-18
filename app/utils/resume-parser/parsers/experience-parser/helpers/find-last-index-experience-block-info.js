const dictionary = require('../../../dictionary/dictionary');

const titles = [
  ...dictionary.title.trainings,
  ...dictionary.title.languages,
  ...dictionary.title.skills,
  ...dictionary.title.technology,
  ...dictionary.title.education,
  ...dictionary.title.courses,
];

module.exports = (text) => text.search(new RegExp(titles.join('|'), 'g'));
