const drinK = {
  color: 'brown',
  carbontated: true,
  sugar: 40,
};

// Below is a Tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 60];
const tea: Drink = ['brown', false, 0];

// Tuple are much harder to understand
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
