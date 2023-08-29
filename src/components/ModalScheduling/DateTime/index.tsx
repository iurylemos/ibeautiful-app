import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Text, Title, Spacer, Box, Cover, Touchable } from "../../../styles";
import colorsUtil from "../../../utils/colors.util";
import themeConfig from "../../../config/theme.config";

const ModalSchedulingDateTime: React.FC = (): JSX.Element => {
  return (
    <>
      <Text hasPadding bold color="dark">
        Para quando você gostaria de agendar?
      </Text>
      <FlatList
        data={["a", "b", "c", "d", "e", "f"]}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Touchable
            width="70px"
            height="80px"
            spacing="0 10px 0 0"
            rounded="10px"
            direction="column"
            justify="center"
            align="center"
            background={item === "a" ? "primary" : "light"}
            border={`1px solid ${
              item === "a"
                ? themeConfig.colors.primary
                : colorsUtil.toAlpha(themeConfig.colors.muted, 10)
            }`}
          >
            <Text small color={item === "a" ? "light" : undefined}>
              Dom
            </Text>
            <Title small color={item === "a" ? "light" : undefined}>
              19
            </Title>
            <Text small color={item === "a" ? "light" : undefined}>
              Abril
            </Text>
          </Touchable>
        )}
      />
      <Text hasPadding bold color="dark">
        Que horas?
      </Text>
      <FlatList
        data={[
          ["14:30", "15:00"],
          ["15:30", "16:00"],
          ["16:30", "17:00"],
          ["17:30"],
        ]}
        horizontal
        keyExtractor={(it) => Math.random().toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
        renderItem={({ item }) => (
          <Box direction="column" spacing="0 10px 0 0" width="100px">
            {item.map((workingSchedule) => (
              <Touchable
                key={workingSchedule}
                width="100px"
                height="35px"
                spacing="0 0 5px 0"
                background={workingSchedule === "14:30" ? "primary" : "light"}
                rounded="7px"
                justify="center"
                align="center"
                border={`1px solid ${
                  workingSchedule === "14:30"
                    ? themeConfig.colors.primary
                    : colorsUtil.toAlpha(themeConfig.colors.muted, 20)
                }`}
              >
                <Text
                  small
                  color={workingSchedule === "14:30" ? "light" : undefined}
                >
                  {workingSchedule}
                </Text>
              </Touchable>
            ))}
          </Box>
        )}
      />
    </>
  );
};

export default ModalSchedulingDateTime;
