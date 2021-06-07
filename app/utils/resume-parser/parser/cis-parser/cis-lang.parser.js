module.exports = (text = '') => {
  return text.match(/[а-яА-Я]+/gim)?.length > 10 ? true : false;
};
