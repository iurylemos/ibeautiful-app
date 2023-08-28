import { all } from "redux-saga/effects";
import salon from "./modules/salon/sagas";

export default function* rootSaga(): any {
  return yield all([salon]);
}
