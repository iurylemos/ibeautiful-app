import { Salon } from "../models/salon.interface";

export interface SalonApi {
  error: boolean;
  salon: Salon;
  distance: number;
  message?: string;
}
