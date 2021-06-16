const dictionary = require('../dictionary/dictionary');

const titles = [...dictionary.title.personalInfo];

module.exports = (text) => text.search(new RegExp(titles.map((val) => `(?<=${val}).`).join('|'), 'i'));
