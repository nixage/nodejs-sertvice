const { keySkills } = require('../../dictionary/skills/key-skills.json');

const findLastIndexPersonalInfo = require('../helpers/find-last-index-personal-info');

module.exports = (text = '') => {
  if (text.length) {
    const index = findLastIndexPersonalInfo(text);
    const newText = index !== -1 ? text.slice(index, -1) : text;
    const skillsString = keySkills
      .map((val) => `(?<![.])\\b${val}\\b`)
      .join('|')
      .replace(/[+]/g, '\\$&');
    const finders = [...new Set(newText.match(new RegExp(skillsString, 'gim')))];
    return finders ? finders.join() : '';
  }
  return '';
};
