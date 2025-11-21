import { theme } from "@/theme"
import { styles } from "./styles"
import { IconButton, Text } from "react-native-paper"
import { router } from "expo-router"
import { View } from "react-native"

export const StackHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <IconButton
        iconColor={theme.colors.primary}
        icon="arrow-left"
        onPress={() => router.back()}
      />
      <Text numberOfLines={1} style={{ maxWidth: "80%" }} variant="titleLarge">
        {title}
      </Text>
    </View>
  )
}
