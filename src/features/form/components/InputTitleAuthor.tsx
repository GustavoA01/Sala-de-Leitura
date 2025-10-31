import { InputController } from "@/components/Controller"
import { FormCardContainer } from "@/components/ui/FormCardContainer"
import { BookFormType } from "@/data/types"

export const InputTitleAuthor = () => {
  return (
    <FormCardContainer iconName="book-outline" title="Título e Autor">
      <InputController<BookFormType>
        name="title"
        label="Título"
      />
      <InputController<BookFormType>
        name="author"
        label="Autor"
      />
    </FormCardContainer>
  )
}
