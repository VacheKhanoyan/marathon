function urlifySpaces(str) {
let arr = str.split("");
for(let i = 0; i < arr.length; ++i){
  if(arr[i] === " "){
    arr[i] = "%20";
  }
}
let strjoin = arr.join("");
return strjoin;
}

console.log(urlifySpaces("Barev Dzez, Vonc eq"));
