const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let columCount = matrix[0].length;
  let result = 0;
  for (let i = 0; i < columCount; i++) {
    let colum = [];
    for (j = 0; j < matrix.length; j++) {
      // let m = 0;
      //console.log(matrix[j][i])
      colum.push(matrix[j][i])
    }
    if (colum.indexOf(0) === -1) {
      colum.forEach(el => {
        result += el;
      })
    } else {
      let colunBeforeNull = colum.slice(0, colum.indexOf(0));
      colunBeforeNull.forEach(el => {
        result += el;
      })
    }
    //console.log(colum)
  }
  //console.log(result)
  return result;
}

module.exports = {
  getMatrixElementsSum
};
