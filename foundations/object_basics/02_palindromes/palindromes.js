const palindromes = function (word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  let start = 0;
  let end = cleanedWord.length - 1;

  while (start < end) {
    if (cleanedWord[start] !== cleanedWord[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
