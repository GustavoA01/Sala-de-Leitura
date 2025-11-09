import { Modal, Text, Button } from "react-native-paper"
import { styles } from "../container/styles"
import { theme } from "@/theme"
import { View } from "react-native"

type ConfirmBuyModalProps = {
  visible: boolean
  hideModal: () => void
  onBuyBook: () => void
}

export const ConfirmBuyModal = ({
  visible,
  hideModal,
  onBuyBook,
}: ConfirmBuyModalProps) => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContainer}
    >
      <Text>Você será redirecionado para a Google Play Store.</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button textColor={theme.colors.onSurface} onPress={hideModal}>
          Cancelar
        </Button>
        <Button textColor={theme.colors.secondary} onPress={onBuyBook}>
          Ok
        </Button>
      </View>
    </Modal>
  )
}
