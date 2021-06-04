const re = /([\)\(\/+])/g;
module.exports = (arr, text) => {
  return arr
    .map((val) => val.replace(re, '\\$1'))
    .filter((val) => new RegExp(`\\b${val}\\b`, 'i').exec(text) !== null)
    .join();
};
