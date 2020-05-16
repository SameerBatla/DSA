const range = (myNum) => {
  if (myNum === 0) {
    return 0;
  }
  return myNum + range(myNum - 1);
};
console.log(range(4));
