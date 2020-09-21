const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strOut = '';
  let repeatTimes = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes;
  let additionSeparator = options.additionSeparator;
  
  if(typeof separator !=='string'){
      separator = String(separator);
  }
  if(typeof addition !=='string'){
      addition = String(addition);
  }
  if(separator === 'undefined'){
      separator = "+";
  }
  if(additionSeparator === undefined){
      additionSeparator = "|";
  }

  if(repeatTimes === undefined)
  {
      repeatTimes = 1;
     
  }
  if(additionRepeatTimes === undefined){
      additionRepeatTimes = 1;
  }
 
  if(addition !== 'undefined'){
  
      if(additionRepeatTimes === 1){
          str = `${str}${addition}`;
      }else{
          for(let i = 0;  i < additionRepeatTimes; i++){
              str += `${addition}${additionSeparator}`;
          }
          str = str.substring(0, str.length - additionSeparator.length);
      }
      
  }
  
  if(repeatTimes > 1){
      for(let i = 0; i<repeatTimes; i++){
          strOut = `${strOut}${str}${separator}`;
      }
      strOut = strOut.substring(0,strOut.length - separator.length);
      
  }else{
      strOut = str;
  }
  return strOut;  
};
  