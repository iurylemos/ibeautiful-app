import React, { useCallback, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import ModalSchedulingHeader from "./Header";
import ModalSchedulingSummary from "./Summary";

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
    >
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <ModalSchedulingHeader />
        <ModalSchedulingSummary />
      </ScrollView>
    </BottomSheet>
  );
};

export default ModalScheduling;
