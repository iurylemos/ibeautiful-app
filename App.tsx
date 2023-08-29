import { useCallback } from "react";
import { View } from "react-native";
import Home from "./src/pages/Home";
import { Provider as StoreProvider } from "react-redux";
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from "react-native-paper";
import store from "./src/store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    config: {
      fontFamily: "Ubuntu-Regular",
      fontWeight: "normal",
    },
  }),
};

SplashScreen.preventAutoHideAsync();

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Bold": require("./src/assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-BoldItalic": require("./src/assets/fonts/Ubuntu-BoldItalic.ttf"),
    "Ubuntu-Italic": require("./src/assets/fonts/Ubuntu-Italic.ttf"),
    "Ubuntu-Light": require("./src/assets/fonts/Ubuntu-Light.ttf"),
    "Ubuntu-LightItalic": require("./src/assets/fonts/Ubuntu-LightItalic.ttf"),
    "Ubuntu-Medium": require("./src/assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-MediumItalic": require("./src/assets/fonts/Ubuntu-MediumItalic.ttf"),
    "Ubuntu-Regular": require("./src/assets/fonts/Ubuntu-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <View
          style={{ flex: 1, backgroundColor: "red" }}
          onLayout={onLayoutRootView}
        >
          <Home />
        </View>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
