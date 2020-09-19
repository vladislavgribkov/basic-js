const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("Error");
 }
let finalArray = [];
let discardNext = '--discard-next'; //исключает следующий элемент массива из преобразованного массива.
let discardPrev = '--discard-prev'; //исключает предыдущий элемент массива из преобразованного массива.
let doubleNext = '--double-next';  //удваивает следующий элемент массива в преобразованном массиве.
let doublePrev = '--double-prev';  // удваивает предыдущий элемент массива в преобразованном массиве.

label:for(let i = 0; i < arr.length; i++){
    finalArray.push(arr[i]);
    if(arr[i] === discardPrev){
        if(i===0){
            finalArray.splice(finalArray.length-1, 1);
        }else{
            finalArray.splice(finalArray.length-1, 1);
            finalArray.splice(finalArray.length-1, 1);
        }
    }
    if(arr[i] === discardNext){
        if(i === arr.length-1){
            finalArray.splice(finalArray.length-1,1);
        }else{
            if(arr[i+2] === discardPrev || arr[i+2] === doublePrev){
                ++i;
            }
            finalArray.splice(finalArray.length-1,1);
            ++i;
            continue label;
        }
    }
    if(arr[i] === doubleNext){
        if(i === arr.length-1){
            finalArray.splice(finalArray.length-1, 1);
        }else{
            finalArray.splice(finalArray.length-1, 1);
            finalArray.push(arr[i+1]);
        }
    }

    if(arr[i] === doublePrev){
        if(i === 0){
            finalArray.splice(finalArray.length-1, 1);
        }else{
            finalArray.splice(finalArray.length-1, 1);
            finalArray.push(arr[i-1]);
        }
    }
}

return finalArray;
};
