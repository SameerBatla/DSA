const oddCollect = (myarr) => {
  const collection = [];
  const helpMe = (newArr) => {
    if (newArr.length === 0) {
      return;
    }
    if (newArr[0] % 2 !== 0) {
      collection.push(newArr[0]);
    }
    helpMe(newArr.slice(1));
  };
  helpMe(myarr);
  return collection;
};

console.log(oddCollect([1, 2, 3, 4, 5]));
