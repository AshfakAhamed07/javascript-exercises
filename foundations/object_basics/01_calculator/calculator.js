const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function (numbers) {
  const result = numbers.reduce((total, current) => total * current, 1);
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 0 || number === 1) return 1;
  let sum = 1;
  for (let i = number; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
