const dictionary = require('../../dictionary/dictionary');

const titles = [
  ...dictionary.title.education,
  ...dictionary.title.skills,
  ...dictionary.title.languages,
  ...dictionary.title.trainings,
];

module.exports = (text, currentPeriod, nextPerion) => {
  /* if last block we find next title or end of list */
  if (!nextPerion) nextPerion = `${titles.join('|')}|$`;
  const re = new RegExp(`${currentPeriod}.*\n((.|\n)*?)(\n.*${nextPerion})`);
  const notes = re.exec(text);
  return notes ? notes[1] : '';
};
