import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const FontsPath = {
  BentonSans: require("@/assets/fonts/BentonSans-Regular.otf"),
  BentonSansBold: require("@/assets/fonts/BentonSans-Bold.otf"),
  BentonSansMedium: require("@/assets/fonts/BentonSans-Medium.otf"),
  BentonSansBook: require("@/assets/fonts/BentonSans-Book.otf"),
  BentonSansBlack: require("@/assets/fonts/BentonSans-Black.otf"),
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    ...FontsPath,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: colorScheme === "dark" ? "#000" : "#FFFFFF",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="builders/macaron-builder" />
        <Stack.Screen name="builders/sandwich-builder" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
