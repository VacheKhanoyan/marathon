function OneAway(str, str1){
  let string = str.concat(str1);
 // console.log(string);
  let compare = new Set();
  for (let i = 0; i < string.length; ++i){
    let char = string[i];
    if(compare.has(char)){
      compare.delete(char);
    } else {
      compare.add(char);
    }
  }
  if(compare.size <=1) return true;
  return false;
}

console.log(OneAway("ashot", "tsho"));
