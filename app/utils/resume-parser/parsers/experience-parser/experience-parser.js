// Helpers
const { findFirstIndexExperienceInfo, getLineBySubString } = require('./helpers');

const companyParser = require('./experience-company-parser');
const monthParser = require('./experience-month-parser');
const yearParser = require('./experience-year-parser');
const periodParser = require('./experience-period-parser');
const positionParser = require('./experience-position-parser');
const notesParser = require('./experience-notes-parser');

const mapExperienceByPeriod = (period, text, index, periods) => {
  let range = period.split(/-|–|\.\.|\//);
  range.length !== 2 ? (range = [period.substring(0, period.length / 2), period.substring(period.length / 2)]) : '';
  const blockNearDate = getLineBySubString(text, period);
  return {
    period,
    from: `${monthParser(range[0])}.${yearParser(range[0])}`,
    to: `${monthParser(range[1])}.${yearParser(range[1])}`,
    company: blockNearDate ? companyParser(blockNearDate) : '',
    position: blockNearDate ? positionParser(blockNearDate) : '',
    notes: notesParser(text, period, periods[index + 1]),
  };
};

module.exports = (text = '') => {
  const fromIndexExperienceBlock = findFirstIndexExperienceInfo(text);
  let experienceBlock = text.slice(fromIndexExperienceBlock === -1 ? 0 : fromIndexExperienceBlock, -1);
  // const lastIndexExperienceBlock = findLastIndexExperienceInfo(experienceBlock);
  // experienceBlock = experienceBlock.slice(0, lastIndexExperienceBlock);
  const durations = periodParser(experienceBlock);
  return durations.map((val, index, arr) => mapExperienceByPeriod(val, text, index, arr));
};
