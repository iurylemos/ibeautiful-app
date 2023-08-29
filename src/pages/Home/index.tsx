import React from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";

const Home = (): JSX.Element => {
  const _renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={() => {}}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList data={[]} ListHeaderComponent={Header} renderItem={_renderItem} />
  );
};

export default Home;
