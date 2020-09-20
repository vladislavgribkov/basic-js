const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoi = {};
  hanoi.turns = Math.pow(2,disksNumber)-1;
  hanoi.seconds = Math.trunc(hanoi.turns / (turnsSpeed / 3600));
  return hanoi;
};
