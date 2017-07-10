var Bee = function() {
  Grub.call(this)
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype)
Bee.prototype.constructor = Bee;

var bee = new Bee();
console.log({bee})

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
