import { createReducer, createTypes } from "reduxsauce";
import Immutable from "seamless-immutable";
import salonTypes from "./types";
import constsUtil from "../../../utils/consts.util";
import { InitialStateSalon } from "../../../interfaces/store/initialStateSalon.interface";

type Action = {
  type: string;
  clients?: [];
  salon?: {};
  payload: any;
};

const types = createTypes(`@salon/GET @salon/UPDATE`);

const INITIAL_STATE = Immutable<InitialStateSalon>({
  salon: {
    _id: "",
    address: "",
    cover: "",
    geo: {
      coordinates: [],
    },
    name: "",
    phone: "",
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

    default:
      return state;
  }
};

export default createReducer(INITIAL_STATE, {
  [types["@salon/GET"]]: getSalon,
  [types["@salon/UPDATE"]]: getSalon,
});
