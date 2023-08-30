import { createReducer, createTypes } from "reduxsauce";
import Immutable from "seamless-immutable";
import salonTypes from "./types";
import constsUtil from "../../../utils/consts.util";
import { InitialStateSalon } from "../../../interfaces/store/initialStateSalon.interface";

type Action = {
  type: string;
  clients?: any[];
  salon?: any;
  services?: any[];
};

const types = createTypes(
  `${salonTypes.GET_SALON} ${salonTypes.UPDATE_SALON} ${salonTypes.UPDATE_SERVICES_SALON}`
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
    service: null,
    collaboratorId: null,
    date: null,
  },
  form: {
    inputFilter: "",
    inputFilterFocus: false,
    modalEspecialty: false,
    modalScheduling: 0,
    schedulingLoading: false,
  },
});

const getSalon = (state = INITIAL_STATE, action: Action) => {
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
    default:
      return state;
  }
};

export default createReducer(INITIAL_STATE, {
  [types[salonTypes.GET_SALON]]: getSalon,
  [types[salonTypes.UPDATE_SALON]]: getSalon,
  [types[salonTypes.UPDATE_SERVICES_SALON]]: getSalon,
});
