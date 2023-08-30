import { Salon } from "../../../interfaces/models/salon.interface";
import salonTypes from "./types";

export function getSalonAction() {
  return {
    type: salonTypes.GET_SALON,
  };
}

export function updateSalonAction(salon: Salon) {
  return {
    type: salonTypes.UPDATE_SALON,
    salon,
  };
}
