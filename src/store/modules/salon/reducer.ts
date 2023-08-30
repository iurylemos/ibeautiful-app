import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";
import salonTypes from "./types";
import constsUtil from "../../../utils/consts.util";

type Action = {
  type: string;
  clients?: [];
  salon?: {};
  payload: any;
};

const INITIAL_STATE = Immutable({
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
});

const helloWorld = (state = INITIAL_STATE, action: Action) => {
  return state.merge({
    salon: {
      ...state.salon,
      ...action.salon,
    },
  });
};

const salonReducer = createReducer(INITIAL_STATE, {
  [salonTypes.UPDATE_SALON]: helloWorld,
});

// function salonReducer(state = INITIAL_STATE, action: Action) {
//   switch (action.type) {
//     case salonTypes.UPDATE_SALON: {
//       return produce(state, (draft) => {
//         draft.salon = {
//           ...draft.salon,
//           ...action.salon,
//         };

//         return draft;
//       });
//     }

//     default:
//       return state;
//   }
// }

export default salonReducer;
