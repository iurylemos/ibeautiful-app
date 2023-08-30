import { createReducer, createTypes } from "reduxsauce";
import Immutable from "seamless-immutable";
import salonTypes from "./types";
import constsUtil from "../../../utils/consts.util";
import {
  InitialStateSalon,
  InitialStateSalonForm,
  InitialStateSalonScheduling,
} from "../../../interfaces/store/initialStateSalon.interface";
import { ServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
import { SalonApi } from "../../../interfaces/api/salonApi.interface";

type Action = {
  type: string;
  clients?: any[];
  salon?: SalonApi;
  services?: ServicesSalonApi[];
  form?: InitialStateSalonForm;
  scheduling?: InitialStateSalonScheduling;
  schedule?: any;
};

const types = createTypes(
  `${salonTypes.GET_SALON}
   ${salonTypes.UPDATE_SALON}
   ${salonTypes.UPDATE_SERVICES_SALON}
   ${salonTypes.UPDATE_FORM_SALON}
   ${salonTypes.UPDATE_SCHEDULE_SALON}
   ${salonTypes.UPDATE_SCHEDULING_SALON}`
);

const INITIAL_STATE = Immutable<InitialStateSalon>({
  salon: {
    _id: "",
    address: {
      city: "",
    },
    cover: "",
    geo: {
      coordinates: [],
    },
    name: "",
    phone: "",
    distance: 0,
    isOpened: false,
  },
  services: [],
  schedule: [],
  collaborators: [],
  scheduling: {
    clientId: constsUtil.clientId,
    salonId: constsUtil.salonId,
    serviceId: "",
    collaboratorId: "",
    date: "",
  },
  form: {
    inputFilter: "",
    inputFilterFocus: false,
    modalEspecialty: false,
    modalScheduling: 0,
    schedulingLoading: false,
  },
});

const salonReducer = (
  state = INITIAL_STATE,
  action: Action
): Immutable.ImmutableObject<InitialStateSalon> => {
  switch (action.type) {
    case salonTypes.UPDATE_SALON: {
      return state.merge({
        ...state,
        salon: {
          ...state.salon,
          ...action.salon,
        },
      });
    }
    case salonTypes.UPDATE_SERVICES_SALON: {
      return state.merge({
        ...state,
        services: action.services,
      });
    }
    case salonTypes.UPDATE_FORM_SALON: {
      return state.merge({
        ...state,
        form: {
          ...state.form,
          ...action.form,
        },
      });
    }
    case salonTypes.UPDATE_SCHEDULE_SALON: {
      return state.merge({
        ...state,
        schedule: [...state.schedule, ...action.schedule],
      });
    }
    case salonTypes.UPDATE_SCHEDULING_SALON: {
      if (action.scheduling?.serviceId) {
        return state.merge({
          ...state,
          form: {
            ...state.form,
            modalScheduling: 2,
          },
          scheduling: {
            ...state.scheduling,
            ...action.scheduling,
          },
        });
      } else {
        return state.merge({
          ...state,
          scheduling: {
            ...state.scheduling,
            ...action.scheduling,
          },
        });
      }
    }
    default:
      return state;
  }
};

export default createReducer(INITIAL_STATE, {
  [types[salonTypes.GET_SALON]]: salonReducer,
  [types[salonTypes.UPDATE_SALON]]: salonReducer,
  [types[salonTypes.UPDATE_SERVICES_SALON]]: salonReducer,
  [types[salonTypes.UPDATE_FORM_SALON]]: salonReducer,
  [types[salonTypes.UPDATE_SCHEDULE_SALON]]: salonReducer,
  [types[salonTypes.UPDATE_SCHEDULING_SALON]]: salonReducer,
});
