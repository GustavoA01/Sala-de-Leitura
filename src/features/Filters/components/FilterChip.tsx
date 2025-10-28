import { theme } from "@/theme"
import { Chip } from "react-native-paper"

type StatusChipProps = {
  label: string
  value: number | undefined
  isSelected: boolean
  handlePressFilter: (filter: number | undefined) => void
}

export const StatusChip = ({
  label,
  value,
  isSelected,
  handlePressFilter,
}: StatusChipProps) => {
  return (
    <Chip
      key={label}
      mode="outlined"
      showSelectedCheck={false}
      onPress={() => handlePressFilter(value)}
      selected={isSelected}
      style={{
        backgroundColor: isSelected
          ? theme.colors.primary
          : theme.colors.surfaceVariant,
      }}
      textStyle={{
        color: isSelected ? "#000000" : theme.colors.onSurface,
        fontSize: 16,
      }}
    >
      {label}
    </Chip>
  )
}
