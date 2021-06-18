const monthParser = require('./experience-month-parser');
const yearParser = require('./experience-year-parser');

const isValidDate = (d) => d instanceof Date && !isNaN(d);

/* period = "Dec 2019 .. Today" */
module.exports = (period) => {
  let range = period.split(/-|–|\.\.|\//);
  range.length !== 2 ? (range = [period.substring(0, period.length / 2), period.substring(period.length / 2)]) : '';

  const fromYear = yearParser(range[0]);
  const fromMonth = monthParser(range[0]);
  const from = new Date(`${fromYear}.${fromMonth}`);

  const toYear = yearParser(range[1]);
  const toMonth = monthParser(range[1]);
  const to = new Date(`${toYear}.${toMonth}`);

  return {
    from: isValidDate(from) ? from : `${fromYear}.${fromMonth}`,
    to: isValidDate(to) ? to : `${toYear}.${toMonth}`,
  };
};
