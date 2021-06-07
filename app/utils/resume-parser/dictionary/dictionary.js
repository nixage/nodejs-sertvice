module.exports = {
  title: {
    skills: ['skills', 'Skills & Expertise', 'skills summary'],
    technology: ['technology', 'technologies'],
    experience: ['experience', 'job experience'],
    education: ['education', 'educations', 'EDUCATION AND TRAINING'],
    languages: ['languages'],
    courses: ['courses'],
    projects: ['projects'],
    personalInfo: ['personal info', 'personal information'],
  },
  regexp: {
    name: `(?<![.\\-])\\b([А-ЯA-Z][а-яa-z]+[\\s\n][А-ЯA-Z][а-яa-z]+)[\\s\n\.]`,
    nameUpperCase: `(?<![.\\-])\\b([А-ЯA-Z][А-ЯA-Z]+[\\s\n][А-ЯA-Z][А-ЯA-Z]+)[\\s\n\.]`,
    nameFlags: ``,
  },
};
