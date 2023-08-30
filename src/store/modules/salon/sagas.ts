import { takeLatest, all, call, put } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";
import apiService from "../../../services/api.service";
import constsUtil from "../../../utils/consts.util";
import { SalonApi } from "../../../interfaces/api/salonApi.interface";
import { updateSalonAction } from "./actions";
import salonTypes from "./types";

export function* getSalon() {
  console.log("enter here? --- 1");

  try {
    const { data: res } = (yield call(
      apiService.get,
      `/salon/${constsUtil.salonId}`
    )) as AxiosResponse<SalonApi>;

    console.log("enter here? --- 2", res);

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateSalonAction({ ...res.salon, distance: res.distance }));
  } catch (error) {
    console.log("error", error);
    const errorMessage = (error as AxiosError).message;
    console.log("errorMessage", errorMessage);
    alert(errorMessage);
  }
}

export default all([takeLatest(salonTypes.GET_SALON, getSalon)]);
