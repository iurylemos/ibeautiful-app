import { takeLatest, all, call, put } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";
import apiService from "../../../services/api.service";
import constsUtil from "../../../utils/consts.util";
import { SalonApi } from "../../../interfaces/api/salonApi.interface";
import { updateSalonAction, updateServicesSalonAction } from "./actions";
import salonTypes from "./types";
import { AllServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";

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

    yield put(updateSalonAction({ ...res.salon }));
  } catch (error) {
    console.log("error", error);
    const errorMessage = (error as AxiosError).message;
    console.log("errorMessage", errorMessage);
    alert(errorMessage);
  }
}

export function* allServicesSalon() {
  console.log("enter here? --- 1");

  try {
    const { data: res } = (yield call(
      apiService.get,
      `/service/salon/${constsUtil.salonId}`
    )) as AxiosResponse<AllServicesSalonApi>;

    console.log("enter here? --- 2", res);

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateServicesSalonAction(res.services));
  } catch (error) {
    console.log("error", error);
    const errorMessage = (error as AxiosError).message;
    console.log("errorMessage", errorMessage);
    alert(errorMessage);
  }
}

export default all([
  takeLatest(salonTypes.GET_SALON, getSalon),
  takeLatest(salonTypes.ALL_SERVICES_SALON, allServicesSalon),
]);
