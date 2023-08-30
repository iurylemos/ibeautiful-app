import { ImageSourcePropType, Dimensions } from "react-native";
import {
  Cover,
  GradientView,
  Title,
  Text,
  Badge,
  Box,
  Touchable,
  Button,
  TextInput,
} from "../../styles";
import themeConfig from "../../config/theme.config";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import { InitialStateSalon } from "../../interfaces/store/initialStateSalon.interface";

const Header = (): JSX.Element => {
  const { salon } = useSelector(
    (state: { salonReducer: InitialStateSalon }) => state.salonReducer
  );

  const width = Dimensions.get("window").width;
  const source: ImageSourcePropType = {
    uri: "https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg",
  };
  console.log("salon", salon);

  return (
    <>
      <Cover source={salon.cover} width={`${width}px`} height="200px">
        <GradientView
          colors={[themeConfig.colors.dark, "transparent"]}
          hasPadding
          justify="flex-end"
        >
          <Badge color="success">ABERTO</Badge>
          <Title color="light">{salon.name}</Title>
          <Text color="light">
            {salon.address.city} • {salon.distance.toFixed(2)}kms
          </Text>
        </GradientView>
      </Cover>
      <Box background="light" align="center" width={`${width}px`}>
        <Box hasPadding justify="space-between">
          <Touchable
            width="30px"
            direction="column"
            align="center"
            spacing="0px 10px 0 0"
          >
            <Icon name="phone" size={24} color={themeConfig.colors.muted} />
            <Text small spacing="10px 0 0">
              Ligar
            </Text>
          </Touchable>
          <Touchable width="50px" direction="column" align="center">
            <Icon
              name="map-marker"
              size={24}
              color={themeConfig.colors.muted}
            />
            <Text small spacing="10px 0 0">
              Visitar
            </Text>
          </Touchable>
          <Touchable width="50px" direction="column" align="center">
            <Icon name="share" size={24} color={themeConfig.colors.muted} />
            <Text small spacing="10px 0 0">
              Enviar
            </Text>
          </Touchable>
        </Box>
        <Box hasPadding direction="column" align="center" justify="center">
          <Button
            icon="clock-check-outline"
            background="success"
            mode="contained"
            uppercase={false}
          >
            Agendar Agora
          </Button>
          <Text small spacing="10px 0 0">
            Horários disponíveis
          </Text>
        </Box>
      </Box>
      <Box hasPadding direction="column" background="light" spacing="10px 0 0">
        <Title small>Serviços (2)</Title>
        <TextInput placeholder="Digite o nome do serviço..." />
      </Box>
    </>
  );
};

export default Header;
