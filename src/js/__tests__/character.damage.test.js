import Character from '../character';

test.each([
  [
    ['Alex', 'Bowman', 50, 1, 25, 25], 10, 42.5,
  ],
  [
    ['Fory', 'Zombie', 100, 1, 55, 80], 60, 88,
  ],
  [
    ['Dopy', 'Magician', 0, 1, 25, 25], 10, -7.5,
  ],
  [
    ['Rojet', 'Daemon', -9, 1, 5, 15], 50, -9,
  ],
])(
  ('Testing method "damage", testing class Character'),
  (params, points, health) => {
    const hero = new Character(...params);

    hero.damage(points);

    expect(hero.health).toBeCloseTo(health);
  },
);
