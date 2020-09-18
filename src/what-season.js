const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === null || typeof(date)!== 'object'){
    return 'Unable to determine the time of year!';
  }
  try { 
    date.getTime(); 
  } catch(e) {
    throw new Error(e); 
  }
  let spring = 'spring';
  let summer = 'summer';
  let autumn = 'autumn';
  let winter = 'winter';
  let season = '';

  switch(date.getMonth()){
    case 0:
     season = winter;
     break;
    case 1:
      season = winter;
      break;
    case 2:
      season = spring;
      break;
    case 3:
      season = spring;
      break;
    case 4:
      season = spring;
      break;
    case 5:
      season = summer;
      break;
    case 6:
      season = summer;
      break;
    case 7:
      season = summer;
      break;
    case 8:
      season = autumn;
      break;
    case 9:
      season = autumn;
      break;
    case 10:
      season = autumn;
      break;
    case 11:
      season = winter;
      break;
 }
  return season;
};
