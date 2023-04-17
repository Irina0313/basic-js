const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let appearence = {};
  let appearenceArr = [];
  domains.forEach(el => {
    el = el.split('.');
    el.reverse()
    let elPart = ''

    el.forEach((item, i) => {

      elPart = elPart + '.' + item
      appearenceArr.push(elPart);

    })


  })
  appearenceArr.sort();

  return appearenceArr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
}
module.exports = {
  getDNSStats
};
