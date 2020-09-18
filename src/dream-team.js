const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  let countNames = 0;
 
  if(members === null || members === undefined){
    return false;
  }

  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === "string")
    {
      countNames += 1;
      let name = members[i].trim();
      arr.push(name[0]);
    }
  }
  if(countNames > 0){ 
    return arr.join("").toUpperCase().split("").sort().join("");
  }

  return false;
};
  