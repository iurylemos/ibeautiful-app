import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Image, Dimensions } from "react-native";
import { Text, Touchable, Box } from "../../../styles";
import colorsUtil from "../../../utils/colors.util";
import themeConfig from "../../../config/theme.config";

const ModalSchedulingPayment: React.FC = (): JSX.Element => {
  return (
    <>
      <Text bold hasPadding color="dark">
        Como você gostaria de pagar?
      </Text>
      <View style={{ paddingHorizontal: 20 }}>
        <Touchable
          height="50px"
          rounded="5px"
          background={colorsUtil.toAlpha(themeConfig.colors.muted, 5)}
          border={`0.5px solid ${colorsUtil.toAlpha(
            themeConfig.colors.muted,
            40
          )}`}
          align="center"
          hasPadding
          removePaddingBottom
          justify="space-between"
          style={{
            paddingTop: 0,
          }}
        >
          <Box align="center">
            <Image
              source={{
                uri: "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png",
              }}
              style={{
                width: 40,
                height: 10,
                marginRight: 10,
              }}
            />
            <Text small color="muted">
              4152 **** **** **** 0981
            </Text>
          </Box>
          <Icon name="cog-outline" color={themeConfig.colors.muted} size={20} />
        </Touchable>
      </View>
    </>
  );
};

export default ModalSchedulingPayment;
