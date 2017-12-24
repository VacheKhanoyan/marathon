function PalindromPermutation(str) {
  let str1 = str.toLowerCase();
  let strspl = str1.split(" ");
  let string = strspl.join("")
  let dublicate = new Set();
for (let i = 0; i < string.length; ++i){
  let char = string[i];
  if (dublicate.has(char)){
    dublicate.delete(char);
  } else {
    dublicate.add(char);
  }
}
if(dublicate.size <=1) return true;
else return false;
}
console.log(PalindromPermutation("Tact Coa"));
console.log(PalindromPermutation("Tact Cod"));
