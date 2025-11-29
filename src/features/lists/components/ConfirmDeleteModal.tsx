import { Modal, Text } from "react-native-paper"
import { View } from "react-native"
import { Button } from "react-native-paper"
import { theme } from "@/theme"
import { styles } from "../container/styles"

type ConfirmDeleteModalProps = {
  deleteModalVisible: boolean
  hideDeleteModal: () => void
  confirmDeleteList: () => void
}

export const ConfirmDeleteModal = ({
  deleteModalVisible,
  hideDeleteModal,
  confirmDeleteList,
}: ConfirmDeleteModalProps) => {
  return (
    <Modal
          visible={deleteModalVisible}
          onDismiss={hideDeleteModal}
          contentContainerStyle={styles.deleteModalContainer}
        >
          <Text>Deseja realmente deletar esta lista?</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              textColor={theme.colors.onSurface}
              onPress={hideDeleteModal}
            >
              Cancelar
            </Button>
            <Button
              textColor={theme.colors.secondary}
              onPress={confirmDeleteList}
            >
              Deletar
            </Button>
          </View>
        </Modal>
  )
}