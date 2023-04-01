import { User } from './User';
import { Company } from './Company';

// Instructin to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  name?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId?: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId || 'map') as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  // Duplicate code in below functions
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
      label: `User: ${user.name}`,
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng,
      },
      label: `Company: ${company.cname}`,
      title: 'Great',
    });
  }

  // DRY Code
  // Very tight coupling. As more classes are added, this won't be a good solution
  addMarker(mappable: User | Company): void {
    let mappableClass = mappable.constructor.name;
    console.log('Class of mappable: ', mappableClass);
    let name = mappable.name || 'Test';

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      label: `${mappableClass}: ${name}`,
      title: `${mappableClass}`,
    });
  }

  // We tell all other classes that if you want to get position on map, you should have a key *LOCATION* with value keys: *LAT, LNG*
  addRefinedMarker(mappable: Mappable): void {
    let mappableClass = mappable.constructor.name;
    let name: string = mappable.name || 'No Name';

    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      label: `${mappableClass}: ${name}`,
      title: `${mappableClass}`,
    });
  }
}
