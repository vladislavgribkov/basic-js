const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
    this.type = type;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined){
        throw new Error('Error');
    }
    
   message = message.toUpperCase();
   key = key.toUpperCase();
   let arr = key.split("");
   let arrMessage = message.split("");
    let outArray = []; 
   if(message.length > key.length){
       let i = 0;
       let j = key.length;
       while(j !== message.length){
           arr.push(arr[i]);
           i++;
           j++;
       }
   }else{
        let j = key.length;
        while(j !== message.length){
            arr.splice(arr.length-1,1);
            j--;
        }
   }
   let j = 0;
   for(let i = 0; i < arrMessage.length; i++){
       
        if((64 < arrMessage[i].charCodeAt() && arrMessage[i].charCodeAt()<91 && arrMessage[j].charCodeAt() < 91) || arrMessage[i]===" "){

            if(arrMessage[i]!==' '){
                let char = (((arrMessage[i].charCodeAt() + arr[j].charCodeAt())%26) + 65);
                outArray.push(String.fromCharCode(char));
            }else{
                --j;
                outArray.push(" ");
            }
            
        }else{
            outArray.push(arrMessage[i]);
        }
        j++;
   }
   if(this.type === false){
    outArray = outArray.reverse();
    }
 return outArray.join("");
}    

decrypt(message, key) {
    if(message === undefined || key === undefined){
        throw new Error('Error');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let arr = key.split("");
    let arrMessage = message.split("");
     let outArray = []; 
    if(message.length > key.length){
        let i = 0;
        let j = key.length;
        while(j !== message.length){
            arr.push(arr[i]);
            i++;
            j++;
        }
    }else{
         let j = key.length;
         while(j !== message.length){
             arr.splice(arr.length-1,1);
             j--;
         }
    }
    let j = 0;
    for(let i = 0; i < arrMessage.length; i++){
         if((64 < arrMessage[i].charCodeAt() && arrMessage[i].charCodeAt()<91 && arrMessage[j].charCodeAt() < 91) || arrMessage[i]===" "){
            
             if(arrMessage[i]!==' '){
                 let char = ((((arrMessage[i].charCodeAt() - arr[j].charCodeAt())+26) % 26) + 65);
                 outArray.push(String.fromCharCode(char));
             }else{
                 --j;
                 outArray.push(" ");
             }
             
         }else{
             outArray.push(arrMessage[i]);
         }
         j++;
    }
    if(this.type === false){
        outArray = outArray.reverse();
    }
    return outArray.join("");
  }
}

module.exports = VigenereCipheringMachine;
