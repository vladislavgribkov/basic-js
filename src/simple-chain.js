const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || typeof position !== 'number' || (position >= this.getLength())) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let resultChain = this.chain.map( elem => `( ${elem} )`);
    this.chain = [];
    return resultChain.join('~~');
  }
};

module.exports = chainMaker;
