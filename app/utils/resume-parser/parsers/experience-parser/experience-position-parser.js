const skillsParser = require('../skills-parser/skills.parser');

module.exports = (str) => skillsParser(str).replace(/\,/g, ' ') || '';
