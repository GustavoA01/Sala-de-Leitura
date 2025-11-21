import { InputController } from "@/components/InputController"
import { theme } from "@/theme"
import { View } from "react-native"
import { Button, IconButton, Text } from "react-native-paper"
import { FormProvider, useForm } from "react-hook-form"
import { styles } from "../container/styles"
import { AddListFormType, addListSchema } from "@/data/schemas"
import { zodResolver } from "@hookform/resolvers/zod"

export const AddListModal = ({
  onCloseAddListModal,
  listId,
}: {
  listId?: string
  onCloseAddListModal: () => void
}) => {
  const methods = useForm<AddListFormType>({
    resolver: zodResolver(addListSchema),
  })
  const {
    handleSubmit,
    formState: { isValid },
  } = methods

  const onSubmit = (data: AddListFormType) => {
    console.log(data)
  }

  return (
    <View >
      <View style={styles.addModalHeader}>
        <Text
          variant="titleLarge"
          style={{ color: theme.colors.onSurface, fontWeight: "bold" }}
        >
          Adicionar lista
        </Text>
        <IconButton icon="close" onPress={onCloseAddListModal} size={24} />
      </View>

      <FormProvider {...methods}>
        <View style={{gap: 4, marginBottom: 16}}>
          <InputController<AddListFormType> name="title" label="Nome" />
          <InputController<AddListFormType> name="listDescription" label="Descrição" />
          </View>
          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
          >
            Criar lista
          </Button>
      </FormProvider>
    </View>
  )
}
