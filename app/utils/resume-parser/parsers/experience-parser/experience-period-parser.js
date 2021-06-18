const dictionary = require('../../dictionary/dictionary');

module.exports = (text = '') => text.match(new RegExp(dictionary.regexp.experiencePeriod, 'gi')) || [];
