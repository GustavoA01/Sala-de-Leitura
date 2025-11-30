import { View } from "react-native"
import { Button, Text, Modal } from "react-native-paper"
import { styles } from "./styles"
import { theme } from "@/theme"

type ConfirmLogoutProps = {
  visible: boolean
  hideModal: () => void
  doLogout: () => void
}

export const ConfirmLogout = ({
  visible,
  hideModal,
  doLogout,
}: ConfirmLogoutProps) => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContainer}
    >
      <Text>Deseja realmente sair?</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button textColor={theme.colors.onSurface} onPress={hideModal}>
          Cancelar
        </Button>
        <Button textColor={theme.colors.error} onPress={doLogout}>
          Sair
        </Button>
      </View>
    </Modal>
  )
}
