import React, { useCallback, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
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

const ModalScheduling: React.FC = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={sheetRef}
      contentHeight={2}
      index={openModal ? 2 : 1}
      snapPoints={[1, 90, Dimensions.get("window").height - 30]}
      onChange={handleSheetChanges}
      enableOverDrag={false}
      // enableContentPanningGesture={false}
      enablePanDownToClose={false}
    >
      <BottomSheetView enableFooterMarginAdjustment>
        <BottomSheetScrollView
          contentContainerStyle={{
            backgroundColor: "#fff",
          }}
          scrollToOverflowEnabled={true}
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator
        >
          <ModalSchedulingHeader />
          <ModalSchedulingSummary />
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
