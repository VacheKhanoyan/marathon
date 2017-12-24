let stringCompress = function(str) {
  if (str.length <= 2) return str;

  let compStr = "";
  let prevChar = str.charAt(0);
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== prevChar) {
      compStr += prevChar + count;
      prevChar = str[i];
      count = 1;
    } else {
      count++;
    }
  }
compStr += prevChar + count;

  return  compStr.split();
};

console.log(stringCompress("aadvccab"));
