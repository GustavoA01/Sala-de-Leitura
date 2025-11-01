import { InputController } from "@/components/InputController"
import { FormCardContainer } from "@/components/ui/FormCardContainer"
import { BookFormType } from "@/data/schemas"
import { HelperText } from "react-native-paper"
import { useFormContext } from "react-hook-form"

export const InputTitleAuthor = () => {
  const {
    formState: { errors },
  } = useFormContext<BookFormType>()
  return (
    <FormCardContainer iconName="book-outline" title="Informações Básicas">
      <InputController<BookFormType> name="title" label="Título" />
      {errors.title && (
        <HelperText type="error">{errors.title?.message}</HelperText>
      )}
      <InputController<BookFormType> name="author" label="Autor" />
    </FormCardContainer>
  )
}
