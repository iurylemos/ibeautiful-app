import React from "react";
import { FlatList } from "react-native";
import Header from "../../components/Header";
import themeConfig from "../../config/theme.config";
import colorsUtil from "../../utils/colors.util";
import Service from "../../components/Service";

const Home = (): JSX.Element => {
  return (
    <FlatList
      style={{
        backgroundColor: colorsUtil.toAlpha(themeConfig.colors.muted, 10),
      }}
      data={["a", "b", "c", "d", "e"]}
      ListHeaderComponent={Header}
      renderItem={({ item }) => <Service key={item} />}
      keyExtractor={(item) => item}
    />
  );
};

export default Home;
