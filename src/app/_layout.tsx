import { Stack } from "expo-router"
import { PaperProvider } from "react-native-paper"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { theme } from "../theme"
import { StatusBar } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/queryClient"
import { GoogleBooksProvider } from "@/contexts/useGoogleBooksProvider"

const RootLayout = () => {
  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <PaperProvider
        theme={theme}
        settings={{
          icon: (props) => <MaterialCommunityIcons {...props} />,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <GoogleBooksProvider>
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
              <Stack.Screen name="list-details/[id]" />
            </Stack>
          </GoogleBooksProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.background}
          />
        </QueryClientProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout
