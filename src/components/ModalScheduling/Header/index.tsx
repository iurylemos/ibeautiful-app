import React from "react";
import { Touchable, GradientView, Text, Box, Spacer } from "../../../styles";
import { View, StyleSheet } from "react-native";
import themeConfig from "../../../config/theme.config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModalSchedulingHeader: React.FC = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <GradientView
        colors={[themeConfig.colors.dark, themeConfig.colors.primary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Box>
          <Touchable hasPadding>
            <Icon
              name="chevron-left"
              color={themeConfig.colors.light}
              size={30}
            />
            <View style={{ marginLeft: 20 }}>
              <Text color="light">Finalizar Agendamento</Text>
              <Spacer size="3px" />
              <Text small color="light">
                Horário, pagamento e especialista.
              </Text>
            </View>
          </Touchable>
        </Box>
      </GradientView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 70,
  },
});

export default ModalSchedulingHeader;
