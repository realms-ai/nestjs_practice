// Arrays in TS
// Typed Arrays => arrays where each element is some consistent type of value

const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompitable
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  // TS can help us provide functions to return type as it's declared
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
// importantDates.push(100);
console.log('Important Date: ', importantDates);
