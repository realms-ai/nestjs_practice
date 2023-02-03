// Interference around functions
const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// Annotations around anonymous functions
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  return null || undefined;
};

// Void and Never
const threwError = (message: string): never => {
  throw new Error(message);
};

const threwError1 = (message: string): string => {
  if (!message) throw new Error(message);
  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

// Destructuring with annotations
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

// Annotations around Objects
const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 20,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const { age }: {age: number} = profile
const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

export {};
