const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== 'string' || !Number.isInteger(Number(sampleActivity)) || sampleActivity.trim()==="" || Number(sampleActivity)<=0){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(Math.log(2)/HALF_LIFE_PERIOD)) <= 0 ? false : Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity))/(Math.log(2)/HALF_LIFE_PERIOD));
};
