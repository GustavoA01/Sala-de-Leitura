import { InputController } from "@/components/InputController"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import { FormCardContainer } from "@/components/ui/FormCardContainer"
import { StatusSheetContent } from "./StatusSheetContent"
import { useRef } from "react"
import { Button } from "react-native-paper"
import { statusLabel } from "@/data/constants"
import { BookFormType } from "@/data/schemas"

type InputCategoryStatusProps = {
  selectedStatus: number
  setSelectedStatus: (status: number) => void
  label: string
  setLabel: (label: string) => void
}

export const InputCategoryStatus = ({
  selectedStatus,
  setSelectedStatus,
  label,
  setLabel,
}: InputCategoryStatusProps) => {
  const bottomSheetRef = useRef<any>(null)
  const onOpenBottomSheet = () => bottomSheetRef.current?.open()

  const handleSelectStatus = (status: number) => {
    setSelectedStatus(status)
    setLabel(statusLabel[status].label)
    bottomSheetRef.current?.close()
  }

  return (
    <FormCardContainer
      iconName="progress-check"
      title="Classificação e Progresso"
    >
      <InputController<BookFormType> name="category" label="Categoria" />
      <Button
        mode="outlined"
        textColor={statusLabel[selectedStatus].color}
        icon="chevron-down"
        onPress={onOpenBottomSheet}
      >
        {label}
      </Button>
      <CustomBottomSheet height={300} bottomSheetRef={bottomSheetRef}>
        <StatusSheetContent
          handleSelectStatus={handleSelectStatus}
          selectedStatus={selectedStatus}
        />
      </CustomBottomSheet>
    </FormCardContainer>
  )
}
