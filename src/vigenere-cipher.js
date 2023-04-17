const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(condition) {
    this.condition = condition;
    console.log(this.condition)
  }
  encrypt(param, key) {
    if (param === 'undefined' || key === 'undefined') {
      throw new NotImplementedError('Incorrect arguments!');
    }
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let paramArr = param.replace(/[^a-za]/gi, '').split('').map(el => el.toUpperCase());


    function getNumbersArr(array) {
      let resultArr = []
      for (let i = 0; i < array.length; i++) {
        resultArr.push(alph.indexOf(array[i]))
      }
      return resultArr;
    }
    let paramArrNumber = getNumbersArr(paramArr)

    if (key.length < paramArrNumber.length) {
      dobble()
      function dobble() {
        key += key;
        if (key.length < paramArrNumber.length) {
          return dobble()
        }
        return key;
      }
    }

    let keyArr = key.split('').map(el => el.toUpperCase()).slice(0, paramArr.length);
    let keyArrNumber = getNumbersArr(keyArr)

    let encriptraArrNumber = getSummArr();
    function getSummArr() {
      let summ = [];
      paramArrNumber.forEach((el, i) => {
        let sum = el + keyArrNumber[i];
        if (sum > 25) {
          sum = sum % 26;
        }
        summ.push(sum);
      })
      return summ
    }
    let encodedArr = [];
    encriptraArrNumber.forEach((el, i) => {
      encodedArr.push(alph[el])
    })

    let paramArrInit = param.split('').map(el => el.toUpperCase());
    let result = '';
    let counter = 0;
    paramArrInit.forEach((el, i) => {
      if (alph.includes(el)) {
        result += encodedArr[counter];
        counter += 1;
      } else {
        result += el;
      }
    })
    // console.log(keyArr)
    // console.log(paramArr)
    //  console.log(paramArrNumber)
    //  console.log(keyArrNumber)
    //  console.log(encriptraArrNumber)
    //   console.log(encodedArr)
    //   console.log(paramArrInit)
    return result;

  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
const directMachine = new VigenereCipheringMachine();

module.exports = {
  VigenereCipheringMachine
};
