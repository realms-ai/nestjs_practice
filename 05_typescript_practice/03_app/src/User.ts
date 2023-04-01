import { faker } from '@faker-js/faker';
import { Mappable } from './CustomizedMap';
// Never use DEFAULT export statement in TS
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude()),
    };
  }

  markerContent(): string {
    return `<h1>User Name: ${this.name}</h1>`;
  }
}
