import React from "react";
import { Text, Title, Spacer, Box, Cover } from "../../../styles";
import themeConfig from "../../../config/theme.config";
import colorsUtil from "../../../utils/colors.util";

const ModalSchedulingSummary: React.FC = (): JSX.Element => {
  return (
    <Box
      align="center"
      hasPadding
      background={colorsUtil.toAlpha(themeConfig.colors.muted, 5)}
    >
      <Cover
        width="40px"
        height="40px"
        source="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2017/12/18220109/corte-ondulado-moicano-low-fade-500x500.jpg"
      />
      <Box direction="column">
        <Title small style={{ fontSize: 20 }}>
          Corte de cabelo masculino
        </Title>
        <Spacer size="4px" />
        <Text small> Total: R$ 45,00 </Text>
      </Box>
    </Box>
  );
};

export default ModalSchedulingSummary;
