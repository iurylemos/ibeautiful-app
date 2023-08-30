import React, { useEffect } from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import themeConfig from "../../config/theme.config";
import colorsUtil from "../../utils/colors.util";
import Service from "../../components/Service";
import ModalScheduling from "../../components/ModalScheduling";
import { useDispatch, useSelector } from "react-redux";
import { getSalonAction } from "../../store/modules/salon/actions";

const Home: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalonAction());
  }, []);

  return (
    <>
      <FlatList
        style={{
          backgroundColor: colorsUtil.toAlpha(themeConfig.colors.muted, 10),
        }}
        data={["a", "b", "c", "d", "e"]}
        ListHeaderComponent={Header}
        renderItem={({ item }) => <Service key={item} />}
        keyExtractor={(item) => item}
      />
      <ModalScheduling />
    </>
  );
};

export default Home;
