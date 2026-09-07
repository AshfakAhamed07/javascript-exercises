const convertToCelsius = function (deg) {
  // Converts Fahrenheit to Celsius and rounds to the nearest 1 decimal place.
  return Math.round((deg - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (deg) {
  // Converts Celsius to Fahrenheit and rounds to the nearest 1 decimal place.
  return Math.round((deg * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
