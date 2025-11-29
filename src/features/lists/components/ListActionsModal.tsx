import { TouchableOpacity, View } from "react-native"
import { Divider, List, Text } from "react-native-paper"
import { theme } from "@/theme"

type ListActionsModalProps = {
  onOpenAddListModal: (id?: string) => void
  listTitle: string
  listId: string
  onDeleteList: () => void
  onCloseBottomSheet: () => void
}

export const ListActionsModal = ({
  onOpenAddListModal,
  listTitle,
  listId,
  onDeleteList,
}: ListActionsModalProps) => {

  return (
    <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
      <Text
        variant="titleLarge"
        style={{ color: theme.colors.onSurface, fontWeight: "bold" }}
      >
        {listTitle}
      </Text>
      <Divider style={{ backgroundColor: theme.colors.primary }} />

      <List.Section>
        <TouchableOpacity onPress={() => onOpenAddListModal(listId)}>
          <List.Item
            title="Editar lista"
            left={() => (
              <List.Icon color={theme.colors.secondary} icon="pencil" />
            )}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDeleteList}>
          <List.Item
            title="Excluir lista"
            left={() => (
              <List.Icon color={theme.colors.error} icon="trash-can-outline" />
            )}
          />
        </TouchableOpacity>
      </List.Section>
    </View>
  )
}
