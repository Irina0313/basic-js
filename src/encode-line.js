const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    while (arr[i] === arr[i + 1]) {
      counter += 1;
      i++
    }
    result = result + counter + arr[i];
    counter = 1;
  }


  result = result.replaceAll('1', '')
  return result
}

module.exports = {
  encodeLine
};
