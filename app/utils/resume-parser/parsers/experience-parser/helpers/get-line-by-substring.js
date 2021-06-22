module.exports = (str, substr) => {
  let line = '';
  const re = new RegExp(`(.+|.?)${substr}(.+|.?)`).exec(str);
  line = re[1] + re[2];
  if (line.length < 30) {
    // const re = new RegExp(`((?:[.\\s\n]?.*){1,3})${substr}(.*\n)`, 'm').exec(str);
    // const re = new RegExp(`(.*(?:(?:\\b\\w+\\b[\\s\\,\n]*){1,4}))${substr}(.*\n)`, 'm').exec(str);
    const re = new RegExp(`(.+(?:.+[\\s\n.\\,]?){1,2})${substr}(.*\n)`, 'm').exec(str);
    line = re ? re[1] : '';
  }
  return line;
};
