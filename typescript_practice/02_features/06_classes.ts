export {};
const space = '\n';

class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

// Basic Inheritance
class Car extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const car = new Car();
console.log(space);
car.drive();
car.honk();

// Class Method Modifiers (public, private, protected)
class Vehicle1 {
  // Can be access by only this class
  private drive(text?: string): void {
    console.log(text || 'chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }

  public drive1(text?: string): void {
    this.drive(text);
  }

  public honk1(): void {
    this.honk();
  }
}

class Car1 extends Vehicle1 {
  public drive2(): void {
    this.drive1('vroom');
  }

  // Child class calling the PROTECTED METHOD
  public honk2(): void {
    this.honk();
  }
}

const vehicle1 = new Vehicle1();
console.log(space);
vehicle1.drive1();
vehicle1.honk1();

const car1 = new Car1();
console.log(space);
car1.drive1();
car1.honk2();

// **** Fields in classes ****
class Vehicle_2 {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  showColor(): void {
    console.log(`Color: ${this.color}`);
  }
}

const v2 = new Vehicle_2('green');
console.log(space);
v2.showColor();

class Vehicle_3 {
  // Better method to define the variables
  constructor(public color: string) {}

  showColor(): void {
    console.log(`Color: ${this.color}`);
  }
}

const v3 = new Vehicle_3('blue');
console.log(space);
v3.showColor();

class Car_3 extends Vehicle_3 {
  constructor(public wheels: number, color: string) {
    // didn't put PUBLIC in front of COLOR as it's the field of parent class
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  public info(): void {
    this.drive();
    this.showColor();
    console.log(`Wheels: ${this.wheels}`);
  }
}

const car_3 = new Car_3(4, 'red');
console.log(space);
car_3.info();
