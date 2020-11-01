const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = arr.slice();
  const moves = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && (i + 1) < arr.length) {
      //console.log('Discard NEXT: ' + arr[i + 1]);
      i += 1;
      // continue;
    } else if (arr[i] === '--double-next' && (i + 1) < arr.length) {
      //console.log('DOUBLE NEXT: ' + arr[i + 1]);
      newArr.push(arr[i + 1]); 
    } else if (arr[i] === '--discard-prev'  && arr[i - 1] !== undefined ) {
      if (arr[i - 1] === newArr[newArr.length - 1] || (isNaN(arr[i - 1] ) && isNaN(newArr[newArr.length - 1]))) {
        //console.log('DISCARD PREV: ' + arr[i - 1]);
        newArr.pop();
      }
    } else if (arr[i] === '--double-prev' && arr[i - 1] !== undefined) {
      if ((arr[i - 1] === newArr[newArr.length - 1] || (isNaN(arr[i - 1] ) && isNaN(newArr[newArr.length - 1]))) && arr[i - 2] !== '--discard-next') {
        //console.log('DOUBLE PREV: ' + arr[i - 1]);
        newArr.push(arr[i - 1]);
      }
    } else if (!moves.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;

  
};
