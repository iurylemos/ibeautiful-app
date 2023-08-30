import { takeLatest, all, call, put, select } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";
import moment from "moment";
import apiService from "../../../services/api.service";
import constsUtil from "../../../utils/consts.util";
import { SalonApi } from "../../../interfaces/api/salonApi.interface";
import {
  updateCollaboratorsSalonAction,
  updateFormServiceSalonAction,
  updateSalonAction,
  updateScheduleSalonAction,
  updateSchedulingSalonAction,
  updateServicesSalonAction,
} from "./actions";
import salonTypes from "./types";
import { AllServicesSalonApi } from "../../../interfaces/api/allServicesSalonApi.interface";
import { InitialStateSalon } from "../../../interfaces/store/initialStateSalon.interface";
import { SchedulingDaysAvailableApi } from "../../../interfaces/api/schedulingDaysAvailableApi.interface";
import { dateUtil } from "../../../utils/date.util";

export function* getSalon() {
  try {
    const { data: res } = (yield call(
      apiService.get,
      `/salon/${constsUtil.salonId}`
    )) as AxiosResponse<SalonApi>;

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
  try {
    const { data: res } = (yield call(
      apiService.get,
      `/service/salon/${constsUtil.salonId}`
    )) as AxiosResponse<AllServicesSalonApi>;

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

export function* saveSchedulingSalon() {
  try {
    yield put(
      updateFormServiceSalonAction({
        schedulingLoading: true,
      })
    );

    const { scheduling } = (yield select<
      (state: { salonReducer: InitialStateSalon }) => InitialStateSalon
    >((state) => state.salonReducer)) as InitialStateSalon;

    const { data: res } = (yield call(apiService.post, "/scheduling", {
      ...scheduling,
      creditCard: {
        number: "4539277550405159",
        holderName: "Tony Stark",
        expMonth: 3,
        expYear: 2028,
        cvv: "356",
      },
    })) as AxiosResponse<{
      error: boolean;
      message: string;
    }>;

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(
      updateFormServiceSalonAction({
        schedulingLoading: false,
      })
    );
  } catch (error) {
    console.log("error", error);
    const errorMessage = (error as AxiosError).message;
    console.log("errorMessage", errorMessage);
    alert(errorMessage);
  }
}

export function* filterScheduleSalon() {
  try {
    const { scheduling } = (yield select<
      (state: { salonReducer: InitialStateSalon }) => InitialStateSalon
    >((state) => state.salonReducer)) as InitialStateSalon;

    const { data: res } = (yield call(
      apiService.post,
      "/scheduling/days-available",
      {
        ...scheduling,
        date: moment().format("YYYY-MM-DD"),
      }
    )) as AxiosResponse<SchedulingDaysAvailableApi>;

    console.log("enter here? --- 2", res);

    if (res.error) {
      alert(res.message);
      return false;
    }

    yield put(updateScheduleSalonAction(res.schedule));
    yield put(updateCollaboratorsSalonAction(res.collaborators));
    const { hoursAvailable, date, collaboratorId } = yield call(
      dateUtil.selectScheduling,
      res.schedule
    );

    yield put(
      updateSchedulingSalonAction({
        date: moment(`${date}T${hoursAvailable[0][0]}`).format(),
        collaboratorId,
      })
    );
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
  takeLatest(salonTypes.FILTER_SCHEDULE_SALON, filterScheduleSalon),
  takeLatest(salonTypes.SAVE_SCHEDULING_SALON, saveSchedulingSalon),
]);
