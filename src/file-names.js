const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  names.forEach((el, i) => {
    if (!result.includes(el)) {
      result.push(el)
    } else {
      let newName = findSuitableName(el);
      result.push(newName);
    }

  })

  function findSuitableName(name) {
    let tryName = '';

    if (result.includes(name)) {
      let counter = 1;
      function getTry() {
        tryName = name + '(' + counter + ')'
        if (result.includes(tryName)) {
          counter += 1;
          getTry();
        }
        return tryName;
      }
    }
    return getTry();
  }

  return result


}

module.exports = {
  renameFiles
};
