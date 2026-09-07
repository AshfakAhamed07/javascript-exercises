const leapYears = function (year) {
  //  Leap years are years divisible by four AND
  //  Years divisible by 100 are not leap years unless they are divisible by 400

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
