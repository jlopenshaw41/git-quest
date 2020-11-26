/* eslint-disable func-names */
const Character = require('./character');

function Player(config) {
  Character.call(this, config);
  this.equippedWeapon = null;
  this.nextLevel = 1000;
  this.currentExperience = 0;
}

Player.prototype = Object.create(Character.prototype);

Object.defineProperty(Player.prototype, 'constructor', {
  value: Player,
  enumerable: false,
  writable: true,
});

Player.prototype._describeAttack = function (target) {
  return `${this.name} lets out a ${this.dialogue}, and hits ${target.name} with ${this.equippedWeapon.name} for ${this.equippedWeapon.damage} damage!`;
};

Player.prototype.equip = function (weapon) {
  this.equippedWeapon = weapon;
};

Player.prototype.attack = function (target) {
  target._takeDamage(this.attackTotal + this.equippedWeapon.damage);
  this.currentExperience += target.experienceReward;
  return this._describeAttack(target);

  // After a killing blow and experience reward, Players should check if their currentExperience is equal to or greater than their nextLevel property. If so, the levelUp() method should be called, and a new nextLevel target that is 10% larger should be set.
  if (this.currentExperience >= this.nextLevel) {
    this.levelUp();
    this.nextLevel *= 1.1;
  }

};

Player.prototype.levelUp = function () {
  this.level += 1;

};

module.exports = Player;
