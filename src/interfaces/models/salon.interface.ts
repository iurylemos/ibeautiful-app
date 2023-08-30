export interface Salon {
  address: Address;
  geo: Geo;
  _id: string;
  name: string;
  cover: string;
  phone: string;
}

interface Address {}

interface Geo {
  coordinates: number[];
}
