import { faker } from '@faker-js/faker';
import { Mappable } from './CustomizedMap';

export class Company implements Mappable {
  cname: string;
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'blue';

  constructor() {
    let n = faker.company.companyName();
    this.cname = n;
    this.name = n;
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1> Company Name: ${this.name}</h1>
        <h3> Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
