import { ServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
import { SchedulingDaysAvailableApiCollaborator } from "../../../interfaces/api/schedulingDaysAvailableApi.interface";
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

export function updateScheduleSalonAction(schedule: any[]) {
  return {
    type: salonTypes.UPDATE_SCHEDULE_SALON,
    schedule,
  };
}

export function filterScheduleSalonAction() {
  return {
    type: salonTypes.FILTER_SCHEDULE_SALON,
  };
}

export function updateCollaboratorsSalonAction(
  collaborators: SchedulingDaysAvailableApiCollaborator[]
) {
  return {
    type: salonTypes.UPDATE_COLLABORATORS_SALON,
    collaborators,
  };
}
