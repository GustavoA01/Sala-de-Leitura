import { Stack } from "expo-router"
import { PaperProvider } from "react-native-paper"
import { theme } from "../theme"
import { StatusBar } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const RootLayout = () => {
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <PaperProvider theme={theme}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="sign-up" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="book-form" />
          <Stack.Screen name="details/[id]" />
        </Stack>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.background}
        />
      </PaperProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
