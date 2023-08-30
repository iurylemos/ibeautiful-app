import { ServicesSalonApi } from "../api/allServicesSalonApi.interface";
import { Salon } from "../models/salon.interface";

export interface InitialStateSalon {
  salon: Salon;
  services: ServicesSalonApi[];
  schedule: any[];
  collaborators: any[];
  scheduling: {
    clientId: string;
    salonId: string;
    service?: any;
    collaboratorId?: any;
    date?: any;
  };
  form: {
    inputFilter: string;
    inputFilterFocus: boolean;
    modalEspecialty: boolean;
    modalScheduling: number;
    schedulingLoading: boolean;
  };
}
