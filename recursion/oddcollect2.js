const oddCollect2 = (myarr) => {
  let collection = [];
  if (myarr.length === 0) {
    return collection;
  }
  if (myarr[0] % 2 !== 0) {
    collection.push(myarr[0]);
  }
  collection = collection.concat(oddCollect2(myarr.slice(1)));
  return collection;
};
console.log(oddCollect2([1, 3, 4, 5]));
