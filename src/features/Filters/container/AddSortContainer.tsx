import { AddButton } from "@/components/ui/AddButton"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import FilterButton from "@/components/ui/FilterButton"
import { View } from "react-native"
import { FilterSheetContent } from "../components/FilterSheetContent"
import { styles } from "./styles"
import { useRef } from "react"
import { sortItems } from "@/data/constants"

type AddSortContainerProps = {
  onPressAddButton: () => void
  selectedSort: string
  onSelectSort: (value: string) => void
}

export const AddSortContainer = ({
  onPressAddButton,
  selectedSort,
  onSelectSort,
}: AddSortContainerProps) => {
  const bottomSheetRef = useRef<any>(null)
  const onOpenBottomSheet = () => bottomSheetRef.current?.open()

  const handleSelectSort = (value: string) => {
    bottomSheetRef.current?.close()
    onSelectSort(value)
  }

  return (
    <>
      <View style={styles.addButtonContainer}>
        <AddButton onPress={onPressAddButton} />
        <FilterButton
          sortByItems={sortItems}
          selectedSort={selectedSort}
          onPress={onOpenBottomSheet}
        />
      </View>

      <CustomBottomSheet height={400} bottomSheetRef={bottomSheetRef}>
        <FilterSheetContent
          selectedSort={selectedSort}
          handleSelectSort={handleSelectSort}
          sortByItems={sortItems}
        />
      </CustomBottomSheet>
    </>
  )
}
