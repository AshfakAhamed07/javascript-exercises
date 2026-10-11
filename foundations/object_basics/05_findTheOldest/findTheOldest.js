const findTheOldest = function (arr) {
  const getAge = (p) =>
    (p.yearOfDeath || new Date().getFullYear()) - p.yearOfBirth;

  return arr.reduce((oldest, current) =>
    getAge(current) > getAge(oldest) ? current : oldest,
  );
};

// Do not edit below this line
module.exports = findTheOldest;
