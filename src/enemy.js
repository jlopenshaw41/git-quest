/* eslint-disable func-names */
const Character = require('./character');

function Enemy(config) {
  Character.call(this, config);
  this.experienceReward = config.experienceReward || 100;
}

Enemy.prototype = Object.create(Character.prototype);

Object.defineProperty(Enemy.prototype, 'constructor', {
  value: Enemy,
  enumerable: false,
  writable: true,
});

Enemy.prototype._describeAttack = function (target) {
  return `${this.name} lets out a ${this.dialogue}, and hits ${target.name} for ${this.attackTotal} damage!`;
};

Enemy.prototype.attack = function (target) {
  if (this.isAlive) {
    target._takeDamage(this.attackTotal);
    return this._describeAttack(target);
  }
  return 'Enemy is dead';
};

module.exports = Enemy;
