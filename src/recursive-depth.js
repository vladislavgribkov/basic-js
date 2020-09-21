const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, countArr = [], count = 1) {
  countArr.push(count);
      for(let i = 0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
          this.calculateDepth(arr.flat(1), countArr, ++count);
          break;
        }
      }
    return Math.max(...countArr);
  }
};