// Instructin to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
  name?: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent?(): string;
  color?: string;
}

export class CustomizedMap {
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

  addRefinedMarker(mappable: Mappable): void {
    let mappableClass = mappable.constructor.name;
    let name: string = mappable.name || 'No Name';

    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
      label: `${mappableClass}: ${name}`,
      title: `${mappableClass}`,
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent?.() || 'Hi There',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
