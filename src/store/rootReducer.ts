import { combineReducers } from "redux";
import { resettableReducer } from "reduxsauce";

import salonReducer from "./modules/salon/reducer";

const resettable = resettableReducer("RESET");

export default combineReducers({
  salonReducer: resettable(salonReducer),
});
