import Character from './character';
import Magician from './magician';
import Daemon from './daemon';

/* eslint-disable */

const hero = Character('Poly', 'Swordman', 100, 1, 25, 25);
console.log(hero);

const heroMagician = Magician('Roji');
console.log(heroMagician);

const heroDaemon = Daemon('Riko');
console.log(heroDaemon);

/* eslint-enable */
