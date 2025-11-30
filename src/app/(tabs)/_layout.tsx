import { Tabs } from "expo-router"
import { theme } from "../../theme"
import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: theme.colors.background },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: theme.colors.onBackground,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginBottom: 4,
        },
      }}
    >
      <Tabs.Screen
        name="main"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialDesignIcons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialDesignIcons
              name={focused ? "library" : "library-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Biblioteca",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialDesignIcons
              name={
                focused
                  ? "bookmark-box-multiple"
                  : "bookmark-box-multiple-outline"
              }
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
