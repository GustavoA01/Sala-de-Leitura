import { View } from "react-native"
import { styles } from "./styles"
import { Button, IconButton, Menu, Text, Portal } from "react-native-paper"
import { theme } from "../../theme"
import { router, usePathname } from "expo-router"
import { useRef, useState } from "react"
import { CustomBottomSheet } from "../ui/CustomBottomSheet"
import { getAuth, signOut } from "firebase/auth"
import { ConfirmLogout } from "./ConfirmLogout"

const pathsTitle = {
  "/main": "Meus Livros",
  "/search": "Buscar",
  "/library": "Biblioteca",
}

export const Header = () => {
  const pathname = usePathname()
  const bottomSheetRef = useRef<any>(null)

  const [visible, setVisible] = useState(false)
  const showModal = () => {
    bottomSheetRef.current?.close()
    setVisible(true)
  }
  const hideModal = () => setVisible(false)

  const onOpenBottomSheet = () => bottomSheetRef.current?.open()
  const auth = getAuth()

  const doLogout = async () => {
    try {
      await signOut(auth)
      router.replace("/")
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
            onPress={showModal}
          >
            Sair
          </Button>
        </View>
      </CustomBottomSheet>

      <Portal>
        <ConfirmLogout
          visible={visible}
          hideModal={hideModal}
          doLogout={doLogout}
        />
      </Portal>
    </View>
  )
}
