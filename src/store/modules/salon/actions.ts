import { ServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
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

export function allServicesSalonAction() {
  return {
    type: salonTypes.ALL_SERVICES_SALON,
  };
}

export function updateServicesSalonAction(services: ServicesSalonApi[]) {
  return {
    type: salonTypes.UPDATE_SERVICES_SALON,
    services,
  };
}
