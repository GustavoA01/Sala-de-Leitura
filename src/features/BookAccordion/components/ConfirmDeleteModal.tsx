import { View } from "react-native"
import { Button, Modal, Text } from "react-native-paper"
import { theme } from "@/theme"
import { styles } from "../container/styles"

type ConfirmDeleteModalProps = {
  visible: boolean
  hideModal: () => void
  handelDeleteBook: () => void
}

export const ConfirmDeleteModal = ({
  visible,
  hideModal,
  handelDeleteBook,
}: ConfirmDeleteModalProps) => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modalContainer}
    >
      <Text style={{ textAlign: "center" }}>
        Deseja realmente deletar este livro? 
        Ele também será excluído de qualquer lista que esteja presente.
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button textColor={theme.colors.onSurface} onPress={hideModal}>
          Cancelar
        </Button>
        <Button onPress={handelDeleteBook} textColor={theme.colors.secondary}>
          Deletar
        </Button>
      </View>
    </Modal>
  )
}
