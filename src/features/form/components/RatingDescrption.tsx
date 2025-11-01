import { FormCardContainer } from "@/components/ui/FormCardContainer"
import { BookFormType } from "@/data/schemas"
import { InputController } from "@/components/InputController"
import { HelperText } from "react-native-paper"
import { useFormContext } from "react-hook-form"
export const RatingDescription = () => {
  const {
    formState: { errors },
  } = useFormContext<BookFormType>()
  return (
    <FormCardContainer iconName="star-outline" title="Avaliação da Leitura">
      <InputController<BookFormType>
        name="rating"
        placeholder="max. 100"
        label="Avaliação"
        keyboardType="numeric"
      />
      {errors.rating && (
        <HelperText type="error">{errors.rating?.message}</HelperText>
      )}
      <InputController<BookFormType>
        name="description"
        placeholder="Comentário"
        label="Comentário"
        multiline
        numberOfLines={5}
      />
    </FormCardContainer>
  )
}
