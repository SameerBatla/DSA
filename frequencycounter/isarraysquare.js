const isArraySquare = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }
  return true;
};

console.log(isArraySquare([1, 2, 3], [1, 4, 1]));
