import { View } from "react-native"
import { styles } from "./styles"
import { Button, IconButton, Text } from "react-native-paper"
import { theme } from "../../theme"
import { usePathname } from "expo-router"
import { useRef } from "react"
import { CustomBottomSheet } from "../ui/CustomBottomSheet"

const pathsTitle = {
  "/": "Meus Livros",
  "/search": "Buscar",
  "/library": "Biblioteca",
}

export const Header = () => {
  const pathname = usePathname()
  const bottomSheetRef = useRef<any>(null)

  const onOpenBottomSheet = () => bottomSheetRef.current?.open()

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
        onPress={onOpenBottomSheet}
      />

      <CustomBottomSheet bottomSheetRef={bottomSheetRef} height={200}>
        <View style={styles.settingsContainer}>
          <Text variant="headlineSmall" style={styles.settingsTitle}>
            Configurações da conta
          </Text>
          <Button
            textColor={theme.colors.error}
            mode="outlined"
            onPress={() => {}}
          >
            Sair
          </Button>
        </View>
      </CustomBottomSheet>
    </View>
  )
}
