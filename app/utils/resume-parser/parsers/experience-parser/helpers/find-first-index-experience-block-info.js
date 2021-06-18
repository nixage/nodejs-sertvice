const dictionary = require('../../../dictionary/dictionary');

const experienceTitle = [...dictionary.title.experience];

module.exports = (text) => text.search(new RegExp(experienceTitle.map((val) => `(?<=${val}[\\s]?\n).`).join('|'), 'i'));
