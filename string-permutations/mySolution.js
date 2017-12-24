function isPermutation(a, b) {
  // let aspl = a.split('');
  // let asort = aspl.sort();
  // let ajoin = asort.join();
  // let bspl = b.split('');
  // let bsort = bspl.sort();
  // let bjoin = bsort.join();
  if(a.length !== b.length) return false;
  if(a.split('').sort().join() === b.split('').sort().join())
    return true;
    return false;
  }

console.log(isPermutation('sad ', "da s"));
