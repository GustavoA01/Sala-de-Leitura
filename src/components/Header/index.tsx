import { View } from "react-native"
import { styles } from "./styles"
import { IconButton, Text } from "react-native-paper"
import { theme } from "../../theme"
import { usePathname } from "expo-router"

const pathsTitle = {
  "/": "Meus Livros",
  "/search": "Buscar",
  "/library": "Biblioteca",
}

export const Header = () => {
  const pathname = usePathname()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {pathsTitle[pathname as keyof typeof pathsTitle]}
      </Text>
      <IconButton
        icon="account"
        size={24}
        iconColor={theme.colors.onBackground}
        style={styles.accountButton}
        onPress={() => {}}
      />
    </View>
  )
}
