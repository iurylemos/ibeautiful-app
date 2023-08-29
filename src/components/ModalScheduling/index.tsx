import React, { useCallback, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import ModalSchedulingHeader from "./Header";

const ModalScheduling: React.FC = (): JSX.Element => {
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <BottomSheet
      ref={sheetRef}
      contentHeight={2}
      index={1}
      snapPoints={[1, 90, Dimensions.get("window").height - 30]}
      onChange={handleSheetChanges}
    >
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <ModalSchedulingHeader />
      </ScrollView>
    </BottomSheet>
  );
};

export default ModalScheduling;
