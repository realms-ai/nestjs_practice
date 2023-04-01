// INTERFACES
const space = '\n';

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Improve above code with INTERFACES
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle1 = (vehicle: Vehicle) => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

console.log(space);
printVehicle1(oldCivic);

const cars: Vehicle[] = [
  {
    name: 'Civic',
    year: 2000,
    broken: false,
  },
  {
    name: 'Toyota',
    year: 2005,
    broken: true,
  },
];
console.log(space, 'Cars: ', cars);

// Adding functions in INTERFACES
interface Vehicle1 {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(text: string): string;
}

const oldCivic1 = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(text: string): string {
    return `This is a ${this.broken ? 'broken' : ''} ${this.name} of year ${
      this.year
    }.`;
  },
};

const oldCivic2 = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(text: string): string {
    return text;
  },
};

const printVehicle2 = (vehicle: Vehicle1, text: string) => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary(text)}`);
};
console.log(space);
printVehicle2(oldCivic1, '');

console.log(space);
const text =
  'This is a green color Civic, which have everything intact but damaged engine box';
printVehicle2(oldCivic2, text);
