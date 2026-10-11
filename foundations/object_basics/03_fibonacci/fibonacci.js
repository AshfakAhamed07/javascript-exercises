const fibonacci = function (num) {
  let cleanedNum;
  if (typeof num !== "number") {
    cleanedNum = parseInt(num);
  } else {
    cleanedNum = num;
  }
  if (isNaN(cleanedNum) || cleanedNum < 0) return "OOPS";
  if (cleanedNum == 0) return 0;

  const fib = [0, 1];

  for (let i = 2; i <= cleanedNum; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[cleanedNum];
};

// Do not edit below this line
module.exports = fibonacci;
