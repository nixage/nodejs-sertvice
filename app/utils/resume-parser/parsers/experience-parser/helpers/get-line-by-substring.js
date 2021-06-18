module.exports = (str, substr) => {
  let line = new RegExp(`(.+|.?)${substr}(.+|.?)`).exec(str);
  if ((line[1] + line[2]).length < 30) {
    line = new RegExp(`(.|\n){10}${substr}(([.\s\n]?.+){1,2})`, 'm').exec(str);
  }
  return line ? line[1] + line[2] : '';
};
