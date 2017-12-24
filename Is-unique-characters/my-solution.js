function isUnique(str) {
  let arrStr = str.split('');
   for (let i = 0; i < arrStr.length; ++i ){
      for(let j = i+1; j < arrStr.length; ++j){
      if(arrStr[j] == arrStr[i]) {
      return false;
      }
      }
  }
   return true;
}

console.log(isUnique('asdfa'));function isUnique(str) {
  let arrStr = str.split('');
  console.log(arrStr)
  for (let i = 0; i < arrStr.length; ++i ){
      for(let j = i+1; j < arrStr.length; ++j){
      if(arrStr[j] == arrStr[i]) {
      return false;
      }
      }
  }
   return true;
}

console.log(isUnique('asdfa'));
