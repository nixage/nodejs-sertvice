const dictionary = require('../../dictionary/dictionary');

const experienceTitle = [...dictionary.title.experience];

const findFirstIndexExperienceInfoTitle = (text) =>
  text.search(new RegExp(experienceTitle.map((val) => `(?<=${val}\n).`).join('|'), 'i'));

const getExperienceBlock = (text, fromIndex = 0) => text.slice(fromIndex, -1);

const getPeriod = (text) => text.match(new RegExp(dictionary.regexp.experiencePeriod, 'gi')) || [];

const findMonth = (str) =>
  dictionary.months.find((month) => new RegExp(month.re, 'i').test(str))?.number || /\d{2}(?=\.)/.exec(str);

const getYear = (str) => /\d{4}/.exec(str) || '';

const getLineByPeriod = (str, period) => new RegExp(`(.+|.?)${period}(.+|.?)`).exec(str);

const getCompany = (str) => {
  const find = new RegExp(dictionary.regexp.company).exec(str);
  return find ? find[0] : '';
};

const mapExperienceByPeriod = (period, text) => {
  const range = period.split('-');
  const linePeriond = getLineByPeriod(text, period);
  const company = linePeriond ? getCompany(linePeriond[1] + linePeriond[2]) : '';
  return {
    period,
    from: `${findMonth(range[0])}.${getYear(range[0])}`,
    to: `${findMonth(range[1])}.${getYear(range[1])}`,
    company,
  };
};

module.exports = (text = '') => {
  const fromIndex = findFirstIndexExperienceInfoTitle(text);
  const experienceBlock = getExperienceBlock(text, fromIndex === -1 ? 0 : fromIndex);
  const duration = getPeriod(experienceBlock);
  return duration.map((val) => mapExperienceByPeriod(val, text));
};
