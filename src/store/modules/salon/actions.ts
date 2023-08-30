import { ServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
import { Salon } from "../../../interfaces/models/salon.interface";
import {
  InitialStateSalon,
  InitialStateSalonForm,
  InitialStateSalonScheduling,
} from "../../../interfaces/store/initialStateSalon.interface";
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

export function updateFormServiceSalonAction(
  form: Partial<InitialStateSalonForm>
) {
  return {
    type: salonTypes.UPDATE_FORM_SALON,
    form,
  };
}

export function updateSchedulingSalonAction(
  scheduling: Partial<InitialStateSalonScheduling>
) {
  return {
    type: salonTypes.UPDATE_SCHEDULING_SALON,
    scheduling,
  };
}

export function updateScheduleSalonAction(
  schedule: Partial<InitialStateSalonScheduling>
) {
  return {
    type: salonTypes.UPDATE_SCHEDULE_SALON,
    schedule,
  };
}
