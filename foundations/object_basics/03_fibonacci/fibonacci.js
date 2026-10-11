const fibonacci = function (num) {
  let cleanedNum = typeof num !== "number" ? parseInt(num) : num;

  if (isNaN(cleanedNum) || cleanedNum < 0) return "OOPS";
  cleanedNum = Math.floor(cleanedNum);
  if (cleanedNum === 0) return 0;

  let secondPrev = 0;
  let firstPrev = 1;

  for (let i = 2; i <= cleanedNum; i++) {
    [secondPrev, firstPrev] = [firstPrev, secondPrev + firstPrev];
  }
  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
