import { ImageSourcePropType, Dimensions } from "react-native";
import { Cover, GradientView, Title, Text, Badge } from "../../styles";
import themeConfig from "../../config/theme.config";

const Header = (): JSX.Element => {
  const width = Dimensions.get("window").width;
  const source: ImageSourcePropType = {
    uri: "https://s2.glbimg.com/Ha2q-YYa3pCWtwM4E51zi_p-POI=/940x523/e.glbimg.com/og/ed/f/original/2019/02/20/blow-dry-bar-del-mar-chairs-counter-853427.jpg",
  };

  return (
    <Cover source={source} width={`${width}px`} height="200px">
      <GradientView
        colors={[themeConfig.colors.dark, "transparent"]}
        hasPadding
        justify="flex-end"
      >
        <Badge color="success">ABERTO</Badge>
        <Title color="light">Salão Teste</Title>
        <Text color="light">Porto Alegre • 5.2kms</Text>
      </GradientView>
    </Cover>
  );
};

export default Header;
