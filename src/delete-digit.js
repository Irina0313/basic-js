const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let n1 = String(n).split('');
  console.log(n1)
  for (let i = 0; i < n1.length; i++) {
    let result1 = '';
    n1.splice(i, 1)
    n1.forEach(el => {
      result1 = Number(result1 + el);
    })
    if (result1 > result) {
      result = result1;
    }

    n1 = String(n).split('');
  }
  return result;
}

module.exports = {
  deleteDigit
};
