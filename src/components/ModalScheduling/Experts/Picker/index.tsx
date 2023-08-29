import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { Dimensions } from "react-native";

import { Text, Box, Touchable, Cover } from "../../../../styles";
import themeConfig from "../../../../config/theme.config";

const ModalSchedulingExpertsPicker: React.FC = (): JSX.Element => {
  return (
    <Modal
      isVisible={false}
      style={{ backgroundColor: themeConfig.colors.light }}
    >
      <ScrollView>
        <Box hasPadding direction="column">
          <Text bold color="dark">
            Corte de cabelo feminino
          </Text>
          <Text small>Disponíveis em 20/04/2023 (Dom) ás 11:30</Text>
          <Box wrap="wrap" spacing="10px 0 0" width="100%">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((collaborator, idx) => (
              <Touchable
                key={Math.random().toString() + idx}
                height="70px"
                spacing="10px 0px 0px 0px"
                direction="column"
                align="center"
                width={`${(Dimensions.get("screen").width - 80) / 4}px`}
              >
                <Cover
                  height="45px"
                  width="45px"
                  source="https://img.freepik.com/fotos-premium/menina-de-cabeleireiro-profissional-com-secador-de-cabelo-pente-nas-maos_2221-4755.jpg"
                  circle
                  border={
                    collaborator === 1
                      ? `2px solid ${themeConfig.colors.primary}`
                      : "none"
                  }
                  spacing="0px 0px 5px 0px"
                />
                <Text small bold>
                  Juliana
                </Text>
              </Touchable>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Modal>
  );
};

export default ModalSchedulingExpertsPicker;
