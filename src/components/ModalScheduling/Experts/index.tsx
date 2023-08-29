import React from "react";
import { Cover, Box, Text, Button } from "../../../styles";
import themeConfig from "../../../config/theme.config";

const ModalSchedulingExperts: React.FC = (): JSX.Element => {
  return (
    <>
      <Text bold color="dark" hasPadding removePaddingBottom>
        Gostaria de trocar o(a) especialistas?
      </Text>
      <Box hasPadding>
        <Box align="center">
          <Cover
            width="45px"
            height="45px"
            circle
            source="https://img.freepik.com/fotos-premium/cabeleireiro-profissional-fica-em-um-salao-de-beleza-com-um-secador-de-cabelo-na-mao_2221-4638.jpg"
          />
          <Text small>Juliana Righi</Text>
        </Box>
        <Box>
          <Button
            uppercase={false}
            textColor={themeConfig.colors.muted}
            background={themeConfig.colors.light}
            mode="contained"
            block
          >
            Trocar Especialista
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ModalSchedulingExperts;
