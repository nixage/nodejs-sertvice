const dictionary = require('../../dictionary/dictionary');

const skillsParser = require('../skills-parser/skills.parser');

module.exports = (text) => {
  let company = '';
  const skills = skillsParser(text);
  text = text.replace(new RegExp(skills.replace(/\,/g, '|'), 'gi'), '');
  text = text.replace(new RegExp(dictionary.regexp.companyWordReplacer, 'gi'), '');
  const find = new RegExp(dictionary.regexp.company, 'gm').exec(text);
  if (find) {
    company = find[1].replace(new RegExp(dictionary.regexp.companySpecialSymbolReplacer, 'g'), '');
    // if (find[2]) company += ` ${find[2].replace(new RegExp(dictionary.regexp.companySpecialSymbolReplacer, 'g'), '')}`;
  }
  return company.replace(/\s+/, '');
};
