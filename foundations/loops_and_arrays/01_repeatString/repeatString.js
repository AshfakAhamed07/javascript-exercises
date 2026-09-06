const repeatString = function(str, num) {
   // have a variable to hold the repeated string
   // check if the number is negative and return 'ERROR' if it is
   // loop through the number of times and add the string to the variable

   let repeatedString = '';
   if( num < 0) {
      return 'ERROR';
   }
   for (let i = 0; i < num; i++) {
      repeatedString += str;
   }
   return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
