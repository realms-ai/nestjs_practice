import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { CustomizedMap } from './CustomizedMap';

// Creating a USER
const user = new User();
console.log('Typeof User Class: ', typeof user);
console.log('User: ', user);

// Creating a Company
const company = new Company();
console.log('Company: ', company);

// Creating a Google Map on the page
// First map without giving any ID
const map = new CustomMap();
// Second map with an ID
const map1 = new CustomMap('map1');

// Adding User Marker on the Map
map.addUserMarker(user);
map.addCompanyMarker(company);

// Adding Company Marker on the second Map
map1.addCompanyMarker(company);

// Dry Code
const dryMap = new CustomMap('dryMap');
dryMap.addMarker(user);
dryMap.addMarker(company);

// Refined Map
const dryRefinedMap = new CustomizedMap('dryRefinedMap');
dryRefinedMap.addRefinedMarker(user);
dryRefinedMap.addRefinedMarker(company);
