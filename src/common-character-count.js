const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let baseArr;
  let secondArr;
  if (arr1.length > arr2.length) {
    baseArr = arr2;
    secondArr = arr1;

  } else {
    baseArr = arr1;
    secondArr = arr2;
  }

  let result = [];
  baseArr.forEach(el => {
    if (secondArr.includes(el)) {
      result.push(el);
      secondArr.splice(secondArr.indexOf(el), 1)
    }
  })
  return result.length
}

module.exports = {
  getCommonCharacterCount
};
