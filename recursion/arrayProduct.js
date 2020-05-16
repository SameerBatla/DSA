const arrayProduct = (myarr) => {
  if (myarr.length === 0) {
    return 1;
  } else return myarr[0] * arrayProduct(myarr.slice(1));
};
console.log(arrayProduct([1,2,3]))
