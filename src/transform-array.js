const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if(!Array.isArray(arr)){
    throw new Error("Error");
 }
 let discardNext = '--discard-next'; //исключает следующий элемент массива из преобразованного массива.
 let discardPrev = '--discard-prev'; //исключает предыдущий элемент массива из преобразованного массива.
 let doubleNext = '--double-next';  //удваивает следующий элемент массива в преобразованном массиве.
 let doublePrev = '--double-prev';  // удваивает предыдущий элемент массива в преобразованном массиве.
 let newArray = [];
  for(let i = 0; i < arr.length-1; i++){
    newArray.push(arr[i]);

    if(arr[i] === discardNext){
        ++i;
        newArray.splice(i,1);
    }
    if(arr[i] === discardPrev){
      newArray.splice(i-1,1);
      newArray.splice(i-1,1);
    }

    if(arr[i] === doubleNext){
      newArray.push(arr[i+1]);
      newArray.splice(i,1);
    }

    if(arr[i] === doublePrev){
      newArray.push(arr[i-1]);
      newArray.splice(i,1);
    }
    
  }
  return newArray;
};
