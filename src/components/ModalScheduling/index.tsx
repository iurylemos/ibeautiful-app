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

const ModalScheduling: React.FC = (): JSX.Element => {
  const [currentSnap, setCurrentSnap] = useState<number>(0);
  const { form, scheduling, services } = useSelector(
    (state: { salonReducer: InitialStateSalon }) => state.salonReducer
  );
  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    setCurrentSnap(form.modalScheduling);
  }, [form.modalScheduling]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

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
          <ModalSchedulingSummary scheduling={scheduling} services={services} />
          <ModalSchedulingDateTime />
          <ModalSchedulingExperts />
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
        <ModalSchedulingExpertsPicker />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default ModalScheduling;
