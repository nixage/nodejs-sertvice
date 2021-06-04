const databases = require('../../dictionary/skills/database.json');
const frameworks = require('../../dictionary/skills/frameworks.json');
const languages = require('../../dictionary/skills/languages.json');
const tools = require('../../dictionary/skills/tools.json');

const findFirstIndexByTitles = require('../../helpers/find-index-by-title');

module.exports = (text = '') => {
  if (text.length) {
    const encodeSymbols = /[\)\)\+\#]/g;
    languages.languages = languages.languages.map((val) => val.replace(encodeSymbols, '\\$1'));
    const index = findFirstIndexByTitles(text);
    const newText = text.slice(index !== -1 ? index : 0, -1);
    return {
      database: [...new Set(newText.match(new RegExp(databases.databases.join('|'), 'gmi')))].join(),
      frameworks: [...new Set(newText.match(new RegExp(frameworks.frameworks.join('|'), 'gmi')))].join(),
      languages: [...new Set(newText.match(new RegExp(languages.languages.join('|'), 'gmi')))].join(),
      tools: [...new Set(newText.match(new RegExp(tools.tools.join('|'), 'gmi')))].join(),
    };
  }
  return '';
};
