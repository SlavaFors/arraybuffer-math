import StonedCharacter from '../stonedCharacter';

test('Should test index distance to be 0', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.distance = 0;
  characterIsStoned.updAttack = 100;
  expect(characterIsStoned.updAttack).toBe(0);
});

test('Should test index distance to be 1', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.distance = 1;
  characterIsStoned.updAttack = 100;
  expect(characterIsStoned.updAttack).toBe(90);
});

test('Should test updAttack while not being stoned', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Daemon');
  characterIsStoned.distance = 2;
  characterIsStoned.updAttack = 100;
  characterIsStoned.stoned = false;
  expect(characterIsStoned.updAttack).toBe(80);
});

test('Should test updAttack while being stoned', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.updAttack = 3;
  characterIsStoned.distance = 3;
  characterIsStoned.stoned = true;
  expect(characterIsStoned.updAttack).toBeCloseTo(0);
});

test('Shold test isStoned setter', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.stoned = false;
  expect(characterIsStoned.stoned).toBe(false);
});

test('Shold test isStoned setter', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.stoned = true;
  expect(characterIsStoned.stoned).toBe(true);
});

test('Shold test isStoned setter', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.stoned = 1345;
  expect(characterIsStoned.stoned).toBe(false);
});

test('Shold test incorrect updAttack value', () => {
  const characterIsStoned = new StonedCharacter('Rico', 'Magician');
  characterIsStoned.updAttack = 1000;
  expect(characterIsStoned.updAttack).toBe(0);
});
