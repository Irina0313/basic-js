const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let columCount = matrix[0].length;
  let result = [];

  for (let i = 0; i < columCount; i++) {

    for (j = 0; j < matrix.length; j++) {

      console.log(i, j)
      /*  if(j!=0){
          let top = matrix[i][j-1]
          let topRight = matrix[i+1][j-1]
          let topLeft = matrix[i-1][j-1]
        }
        if(i!=0){
          let topLeft = matrix[i-1][j-1]
          let left = matrix[i-1][j]
          let bottomLeft = matrix[i-1][j+1]
        }
        if(j!=matrix.length){
           let bottomLeft = matrix[i-1][j+1]
           let bottom = matrix[i][j+1]
           let bottomRight = matrix[i+1][j+1]
        }
        if(i!=columCount){
         let topRight = matrix[i+1][j-1]
          let right = matrix[i+1][j]
          let bottomRight = matrix[i+1][j+1]
        }*/




      if (i === 0 && j === 0) {
        //лев угол
        let counter = 0;
        //right
        if (matrix[i + 1][j] != 'undefined' && matrix[i + 1][j] === true) {
          counter += 1;
        }
        //bottomRight
        if (matrix[i + 1][j + 1] != 'undefined' && matrix[i + 1][j + 1] === true) {
          counter += 1;
        }
        //bottom
        if (matrix[i][j + 1] != 'undefined' && matrix[i][j + 1] === true) {
          counter += 1;

        }
        result.push([counter])
      }




      //перв. столбец
      if (i === 0 && j != 0 && j < matrix.length) {
        let counter = 0;
        //top
        if (matrix[i][j - 1] != 'undefined' && j > 0 && matrix[i][j - 1] === true) {
          counter += 1;
        }
        //topRight
        if (matrix[i + 1][j - 1] != 'undefined' && j > 0 && matrix[i + 1][j - 1] === true) {
          counter += 1;
        }
        //right
        if (matrix[i + 1][j] != 'undefined' && matrix[i + 1][j] === true) {
          counter += 1;
        }
        //bottomRight
        if (matrix[i + 1][j + 1] != 'undefined' && matrix[i + 1][j + 1] === true) {
          counter += 1;
        }
        //bottom
        if (matrix[i][j + 1] != 'undefined' && matrix[i][j + 1] === true) {
          counter += 1;
        }
        result[0].push(counter)
      }
      // прав. столбец
      if (i != 0 && i < columCount - 1 && j === 0) {
        let counter = 0;
        //left
        if (matrix[i - 1][j] != 'undefined' && matrix[i - 1][j] === true) {
          counter += 1;
        }
        //bottomLeft
        if (matrix[i - 1][j + 1] != 'undefined' && matrix[i - 1][j + 1] === true) {
          counter += 1;
        }
        //bottom
        if (matrix[i][j + 1] != 'undefined' && matrix[i][j + 1] === true) {
          counter += 1;
          //bottomRight
          if (matrix[i + 1][j + 1] != 'undefined' && matrix[i + 1][j + 1] === true) {
            counter += 1;
          }
          result.push([counter])

          //right
          if (matrix[i + 1][j] != 'undefined' && matrix[i + 1][j] === true) {
            counter += 1;
          }


        }
        result[1].push(counter)
      }
      // центр
      if (i != 0 && i < columCount - 1 && j != 0 && j < matrix.length - 1) {
        // console.log('hhh', i,j)
        let counter = 0;
        //left
        if (matrix[i - 1][j] != 'undefined' && matrix[i - 1][j] === true) {
          counter += 1;
        }
        //bottomLeft
        if (matrix[i - 1][j + 1] != 'undefined' && matrix[i - 1][j + 1] === true) {
          counter += 1;
        }
        //bottom
        if (matrix[i][j + 1] != 'undefined' && matrix[i][j + 1] === true) {
          counter += 1;
        }
        //bottomRight
        if (matrix[i + 1][j + 1] != 'undefined' && matrix[i + 1][j + 1] === true) {
          counter += 1;
        }

        //right
        if (matrix[i + 1][j] != 'undefined' && matrix[i + 1][j] === true) {
          counter += 1;
        }
        //topRight
        if (matrix[i + 1][j - 1] != 'undefined' && j > 0 && matrix[i + 1][j - 1] === true) {
          counter += 1;
        }
        //top
        if (matrix[i][j - 1] != 'undefined' && j > 0 && matrix[i][j - 1] === true) {
          counter += 1;
        }
        //topLeft
        if (matrix[i - 1][j - 1] != 'undefined' && matrix[i - 1][j - 1] === true) {
          counter += 1;
        }
        result[1].push(counter)
      }

      //нижн. строка
      if (matrix[i + 1][j] != 'undefined' && matrix[i + 1][j] === true) {
        counter += 1;
      }
      //topRight
      if (matrix[i + 1][j - 1] != 'undefined' && j > 0 && matrix[i + 1][j - 1] === true) {
        counter += 1;
      }
      //top
      if (matrix[i][j - 1] != 'undefined' && j > 0 && matrix[i][j - 1] === true) {
        counter += 1;
      }
      //topLeft
      if (matrix[i - 1][j - 1] != 'undefined' && matrix[i - 1][j - 1] === true) {
        counter += 1;
      }
      result.push([counter])

    }




    /*//top
    if(matrix[i][j-1] != 'undefined' && j > 0 && matrix[i][j-1]=== true){
      counter+=1;
    }
    //topRight
    if(matrix[i+1][j-1] != 'undefined'&& j > 0 && matrix[i+1][j-1] === true){
      counter+=1;
    }
    //right
    if(matrix[i+1][j] != 'undefined' && matrix[i+1][j] === true){
      counter+=1;
    }
    //bottomRight
    if(matrix[i+1][j+1] != 'undefined'&& matrix[i+1][j+1] === true){
      counter+=1;
    }
    //bottom
    if(matrix[i][j+1] != 'undefined' && matrix[i][j+1] === true){
      counter+=1;
    }
    //bottomLeft
    if(matrix[i-1][j+1] != 'undefined' && matrix[i-1][j+1] === true){
      counter+=1;
    }
    //left
    if(matrix[i-1][j] != 'undefined' && matrix[i-1][j] === true){
      counter+=1;
    }
    //topLeft
    if(matrix[i-1][j-1] != 'undefined' && matrix[i-1][j-1] === true){
      counter+=1;
    }*/

    // console.log(i,j, counter)
  }
  return result
}



module.exports = {
  minesweeper
};
