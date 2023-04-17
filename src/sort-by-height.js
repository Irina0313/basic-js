const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = []
  arr.forEach(el => {
    if (el === -1) {
      result.push(el)
    } else {
      result.push('')
    }
  })

  arr.sort((a, b) => a - b);
  let newArr = [];
  arr.forEach(el => {
    if (el != -1) {
      newArr.push(el);
    }
  })
  let counter = 0;
  for (let i = 0; i < result.length; i++) {

    if (result[i] != -1) {
      result.splice(i, 1, newArr[counter])
      counter += 1;
    }
  }

  return result
}

module.exports = {
  sortByHeight
};
