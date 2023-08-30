import React, { useCallback, useRef, useState, useEffect } from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Dimensions } from "react-native";
import ModalSchedulingHeader from "./Header";
import ModalSchedulingSummary from "./Summary";
import ModalSchedulingDateTime from "./DateTime";
import ModalSchedulingExperts from "./Experts";
import ModalSchedulingExpertsPicker from "./Experts/Picker";
import ModalSchedulingPayment from "./Payment";
import { Box, Button } from "../../styles";
import themeConfig from "../../config/theme.config";
import { useSelector } from "react-redux";
import { InitialStateSalon } from "../../interfaces/store/initialStateSalon.interface";
import { ServicesSalonApi } from "../../interfaces/api/allServicesSalonApi.interface";
import { dateUtil } from "../../utils/date.util";
import moment from "moment";

const ModalScheduling: React.FC = (): JSX.Element => {
  const [currentSnap, setCurrentSnap] = useState<number>(0);
  const { form, scheduling, services, schedule, collaborators } = useSelector(
    (state: { salonReducer: InitialStateSalon }) => state.salonReducer
  );
  const sheetRef = useRef<BottomSheet>(null);

  const currentService: ServicesSalonApi = services.length
    ? services.filter((s) => s._id === scheduling.serviceId)[0] ?? {
        title: "",
        __v: 0,
        _id: "",
        commission: 0,
        description: "",
        duration: "",
        files: [],
        price: 0,
        recurrence: 0,
        registerData: "",
        salonId: "",
        status: "",
      }
    : {
        title: "",
        __v: 0,
        _id: "",
        commission: 0,
        description: "",
        duration: "",
        files: [],
        price: 0,
        recurrence: 0,
        registerData: "",
        salonId: "",
        status: "",
      };

  useEffect(() => {
    setCurrentSnap(form.modalScheduling);
  }, [form.modalScheduling]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const dateSelected = moment(scheduling.date).format("YYYY-MM-DD");
  const hourSelected = moment(scheduling.date).format("HH:mm");

  const { hoursAvailable, collaboratorsDay } = dateUtil.selectScheduling(
    schedule,
    dateSelected,
    scheduling.collaboratorId
  );

  return (
    <BottomSheet
      ref={sheetRef}
      contentHeight={1}
      index={currentSnap}
      snapPoints={[1, 90, Dimensions.get("window").height - 30]}
      onChange={handleSheetChanges}
    >
      <BottomSheetView>
        <BottomSheetScrollView
          contentContainerStyle={{
            backgroundColor: "#fff",
          }}
          stickyHeaderIndices={[0]}
        >
          <ModalSchedulingHeader />
          <ModalSchedulingSummary service={currentService} />
          <ModalSchedulingDateTime
            service={currentService}
            schedule={schedule}
            dateSelected={dateSelected}
            hourSelected={hourSelected}
            hoursAvailable={hoursAvailable}
          />
          <ModalSchedulingExperts
            collaborators={collaborators}
            scheduling={scheduling}
          />
          <ModalSchedulingPayment />
          <Box hasPadding>
            <Button
              icon="check"
              background={themeConfig.colors.primary}
              mode="contained"
              block
              uppercase={false}
            >
              Confirmar meu agendamento
            </Button>
          </Box>
        </BottomSheetScrollView>
        <ModalSchedulingExpertsPicker
          isVisible={form.modalEspecialty}
          collaborators={collaborators}
          scheduling={scheduling}
          services={services}
          hourSelected={hourSelected}
          collaboratorsDay={collaboratorsDay}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default ModalScheduling;
