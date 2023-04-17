const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let base16 = "0123456789ABCDEF";
  let arr = n.split('-');
  let result = [];
  arr.forEach(element => {
    if (base16.indexOf(element[0]) != -1 && base16.indexOf(element[1]) != -1) {
      result.push(true);
    } else {
      result.push(false);
    }
  });
  if (result.includes(false)) {
    return false;
  } else {
    return true;
  }
}
module.exports = {
  isMAC48Address
};
