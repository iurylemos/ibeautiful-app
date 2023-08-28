import { produce } from "immer";
import salonTypes from "./types";
import constsUtil from "../../../utils/consts.util";

type Action = {
  type: string;
  clients?: [];
  payload: any;
};

const INITIAL_STATE = {
  salon: {},
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
};

function salonReducer(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default salonReducer;
