var ForagerBee = function() {
  Bee.call(this); //inherits properties
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
// Inherits methods from superclass
ForagerBee.prototype = Object.create(Bee.prototype);
// .prototype.constructor property points back to the constructor itself
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};


var foragerBee = new ForagerBee();
console.log({foragerBee})
