import sortProps from '../app';

test('should sort object properties correctly when there are sorting keys', () => {
  const inputObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const inputArray = ['name', 'level'];


  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];


  const recieved = sortProps(inputObject, inputArray);
  expect(recieved).toEqual(expected);
});

test('should sort object properties correctly without sorting keys', () => {
  const inputObject = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };


  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];

  const recieved = sortProps(inputObject);
  expect(recieved).toEqual(expected);
});
