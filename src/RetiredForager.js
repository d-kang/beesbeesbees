var RetiredForagerBee = function() {
  Grub.call(this); // inherits props from Grub;
  ForagerBee.call(this); // inherits props from foragerBee;
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};
// inherits methods from Grub
RetiredForagerBee.prototype = Object.create(Grub.prototype);

//.prototype.constructor property that points back to the constructor itself
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}

var retiredForagerBee = new RetiredForagerBee();
console.log({retiredForagerBee});
