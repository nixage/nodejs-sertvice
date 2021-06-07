const emailParser = require('./email-parser/email-parser');
const phoneParser = require('./phone-parser/phone-parser');
const skillsParser = require('./skills-parser/skills.parser');
const nameParser = require('./name-parser/name.parser');

module.exports = {
  nameParser,
  emailParser,
  phoneParser,
  skillsParser,
};
