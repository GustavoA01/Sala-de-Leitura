import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { theme } from "@/theme"

type ListActionsModalProps = {
  listTitle: string
  listId: string
}

export const ListActionsModal = ({
  listTitle,
  listId,
}: ListActionsModalProps) => {

  return (
    <View style={{ padding: 16, justifyContent: "space-between", flex:1 }}>
      <Text
        variant="titleLarge"
        style={{ color: theme.colors.onSurface, fontWeight: "bold" }}
      >
        {listTitle}
      </Text>
      <View style={{ gap: 8, marginBottom: 16 }}>
        <Button mode="outlined">Editar lista</Button>
        <Button mode="outlined" textColor={theme.colors.error}>
          Excluir lista
        </Button>
      </View>
    </View>
  )
}
