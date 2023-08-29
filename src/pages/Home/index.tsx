import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import themeConfig from "../../config/theme.config";
import colorsUtil from "../../utils/colors.util";

const Home = (): JSX.Element => {
  const _renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => {}}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{
        backgroundColor: colorsUtil.toAlpha(themeConfig.colors.muted, 10),
      }}
      data={[]}
      ListHeaderComponent={Header}
      renderItem={_renderItem}
    />
  );
};

export default Home;
