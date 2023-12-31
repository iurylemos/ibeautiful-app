import { ServicesSalonApi } from "../api/allServicesSalonApi.interface";
import { SchedulingDaysAvailableApiCollaborator } from "../api/schedulingDaysAvailableApi.interface";
import { Salon } from "../models/salon.interface";

export interface InitialStateSalon {
  salon: Salon;
  services: ServicesSalonApi[];
  schedule: any[];
  collaborators: SchedulingDaysAvailableApiCollaborator[];
  scheduling: InitialStateSalonScheduling;
  form: InitialStateSalonForm;
}

export interface InitialStateSalonForm {
  inputFilter: string;
  inputFilterFocus: boolean;
  modalEspecialty: boolean;
  modalScheduling: number;
  schedulingLoading: boolean;
}

export interface InitialStateSalonScheduling {
  clientId: string;
  salonId: string;
  serviceId?: string;
  collaboratorId?: string;
  date?: string;
}
