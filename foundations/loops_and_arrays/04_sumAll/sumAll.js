const sumAll = function (startNum, EndNum) {
  // have a sum variable to hold the values
  // capture all the invalid inputs like negative numbers, non-integers, strings etc and send an error message.
  // loop all the values in the range including the starting and the ending one.

  if (!Number.isInteger(startNum) || startNum <= 0) {
    return "ERROR";
  }

  if (!Number.isInteger(EndNum) || EndNum <= 0) {
    return "ERROR";
  }

  // 2. If startNum is larger than EndNum, swap them using destructuring assignment
  if (startNum > EndNum) {
    [startNum, EndNum] = [EndNum, startNum];
  }

  let sum = 0;
  for (let i = startNum; i <= EndNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
