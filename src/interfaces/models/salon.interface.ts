export interface Salon {
  address: Address;
  geo: Geo;
  _id: string;
  name: string;
  cover: string;
  phone: string;
  distance: number;
  isOpened: boolean;
}

interface Address {
  city: string;
}

interface Geo {
  coordinates: number[];
}
