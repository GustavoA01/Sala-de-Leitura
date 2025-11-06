import { Button, Icon } from "react-native-paper"
import { theme } from "@/theme"

type Props = {
  onPress?: () => void
  sortByItems: { label: string; value: string }[]
  selectedSort: string
}

export const FilterButton = ({ sortByItems, selectedSort, onPress }: Props) => {
  const selectedSortItem = sortByItems.find(
    (item) => item.value === selectedSort
  )?.label
  return (
    <Button
      mode="outlined"
      onPress={onPress}
      textColor={theme.colors.onSurface}
      icon={(props) => (
        <Icon
          source="tune-vertical"
          size={props.size}
        />
      )}
    >
      {selectedSortItem ?? "Ordenar"}
    </Button>
  )
}

export default FilterButton
