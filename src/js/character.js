const TYPES_CHARACTER = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

const ERRORS = {
  name: 'Ошибка! Допустимая длина: 2-10 символов.',
  type: 'Ошибка! Недопустимый тип персонажа.',
  levelup: 'Ошибка! Невозможно повысить уровень умершего персонажа.',
};

class Character {
  constructor(name, type, health, level, attack, defence) {
    if (name === undefined || name.length < 2 || name.length > 10) {
      throw new Error(ERRORS.name);
    }
    this.name = name;

    if (TYPES_CHARACTER.indexOf(type) === -1) {
      throw new Error(ERRORS.type);
    }
    this.type = type;

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error(ERRORS.levelup);
    }

    this.level += 1;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;
export { TYPES_CHARACTER, ERRORS };
