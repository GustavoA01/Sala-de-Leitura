import { View } from "react-native"
import { styles } from "./styles"
import { Button, IconButton, Text } from "react-native-paper"
import { theme } from "../../theme"
import { router, usePathname, useSegments } from "expo-router"
import { useRef } from "react"
import { CustomBottomSheet } from "../ui/CustomBottomSheet"
import { getAuth, signOut } from "firebase/auth"

const pathsTitle = {
  "/": "Meus Livros",
  "/search": "Buscar",
  "/library": "Biblioteca",
}

export const Header = () => {
  const pathname = usePathname()
  const bottomSheetRef = useRef<any>(null)

  const onOpenBottomSheet = () => bottomSheetRef.current?.open()
  const auth = getAuth()

  const doLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {pathsTitle[pathname as keyof typeof pathsTitle]}
      </Text>

      <View style={styles.accountContainer}>
        <Text style={styles.accountText}>{auth.currentUser?.displayName}</Text>
        <IconButton
          icon="account"
          size={24}
          iconColor={theme.colors.onBackground}
          style={styles.accountButton}
          onPress={onOpenBottomSheet}
        />
      </View>
      <CustomBottomSheet bottomSheetRef={bottomSheetRef} height={200}>
        <View style={styles.settingsContainer}>
          <Text variant="headlineSmall" style={styles.settingsTitle}>
            Configurações da conta
          </Text>
          <Button
            textColor={theme.colors.error}
            mode="outlined"
            onPress={doLogout}
          >
            Sair
          </Button>
        </View>
      </CustomBottomSheet>
    </View>
  )
}
