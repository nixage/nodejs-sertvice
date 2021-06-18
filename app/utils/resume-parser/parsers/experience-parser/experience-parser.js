// Helpers
const { findFirstIndexExperienceInfo, getLineBySubString } = require('./helpers');

const companyParser = require('./experience-company-parser');
const periodParser = require('./experience-period-parser');
const positionParser = require('./experience-position-parser');
const notesParser = require('./experience-notes-parser');
const dateParser = require('./experience-date-parser');

const mapExperienceByPeriod = (period, text, index, periods) => {
  const blockNearDate = getLineBySubString(text, period);
  const date = dateParser(period);
  return {
    period,
    from: date.from,
    to: date.to,
    company: blockNearDate ? companyParser(blockNearDate) : '',
    position: blockNearDate ? positionParser(blockNearDate) : '',
    notes: notesParser(text, period, periods[index + 1]),
  };
};

module.exports = (text = '') => {
  const fromIndexExperienceBlock = findFirstIndexExperienceInfo(text);
  const experienceBlock = text.slice(fromIndexExperienceBlock === -1 ? 0 : fromIndexExperienceBlock, -1);
  const periods = periodParser(experienceBlock);
  return periods
    .map((val, index, arr) => mapExperienceByPeriod(val, text, index, arr))
    .filter((val) => val.company.length && val.position.length);
};
