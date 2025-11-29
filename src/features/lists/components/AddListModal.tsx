import { InputController } from "@/components/InputController"
import { theme } from "@/theme"
import { View } from "react-native"
import { ActivityIndicator, Button, IconButton, Text } from "react-native-paper"
import { useFormContext } from "react-hook-form"
import { styles } from "../container/styles"
import { AddListFormType } from "@/data/schemas"

export const AddListModal = ({
  isCreatingListLoading,
  onCloseAddListModal,
  onSubmit,
  isEditing,
}: {
  isCreatingListLoading: boolean
  listId?: string
  onCloseAddListModal: () => void
  onSubmit: () => void
  isEditing: boolean
}) => {
  const {
    formState: { isValid },
  } = useFormContext<AddListFormType>()

  return (
    <View>
      <View style={styles.addModalHeader}>
        <Text
          variant="titleLarge"
          style={{ color: theme.colors.onSurface, fontWeight: "bold" }}
        >
          {isEditing ? "Salvar" : "Adicionar lista"}
        </Text>
        <IconButton icon="close" onPress={onCloseAddListModal} size={24} />
      </View>

      <View style={{ gap: 4, marginBottom: 16 }}>
        <InputController<AddListFormType> name="title" label="Nome" />
        <InputController<AddListFormType>
          name="listDescription"
          label="Descrição"
        />
      </View>
      <Button mode="contained" onPress={onSubmit} disabled={!isValid}>
        {isCreatingListLoading ? <ActivityIndicator /> : isEditing ? "Salvar" : "Criar lista"}
      </Button>
    </View>
  )
}
