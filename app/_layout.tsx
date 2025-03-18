import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from "react-native-reanimated/lib/typescript/Animated";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="stations/[id]"
          options={{
            headerShown: true,
            headerBackTitle: "Back",
            title: "Station Detail",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerShown: false,
            presentation: "modal",
            animation: "fade",
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
