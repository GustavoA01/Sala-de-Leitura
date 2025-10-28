import { AddButton } from "@/components/ui/AddButton"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import FilterButton from "@/components/ui/FilterButton"
import { View } from "react-native"
import { FilterSheetContent } from "../components/FilterSheetContent"
import { styles } from "./styles"
import { useRef, useState } from "react"
import { sortItems } from "@/data/constants"

type AddSortContainerProps = {
  onPressAddButton: () => void
}

export const AddSortContainer = ({
  onPressAddButton,
}: AddSortContainerProps) => {
  const [selectedSort, setSelectedSort] = useState<string>("")

  const bottomSheetRef = useRef<any>(null)
  const onOpenBottomSheet = () => bottomSheetRef.current?.open()

  const handleSelectSort = (value: string) => {
    setSelectedSort(value)
    bottomSheetRef.current?.close()
    console.log(value)
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

      <CustomBottomSheet bottomSheetRef={bottomSheetRef}>
        <FilterSheetContent
          selectedSort={selectedSort}
          handleSelectSort={handleSelectSort}
          sortByItems={sortItems}
        />
      </CustomBottomSheet>
    </>
  )
}
