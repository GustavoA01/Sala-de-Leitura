import { TouchableOpacity, View } from "react-native"
import { Icon, List, Text } from "react-native-paper"
import { theme } from "@/theme"

type FilterSheetContentProps = {
  selectedSort: string
  handleSelectSort: (value: string) => void
  sortByItems: { label: string; value: string }[]
}

export const FilterSheetContent = ({
  selectedSort,
  handleSelectSort,
  sortByItems,
}: FilterSheetContentProps) => {
  return (
    <View style={{ padding: 20 }}>
      <Text
        variant="headlineSmall"
        style={{ color: "white", marginBottom: 10 }}
      >
        Ordenar por:
      </Text>
      
      <View>
        {sortByItems.map((item) => (
          <TouchableOpacity
            key={item.value}
            onPress={() => handleSelectSort(item.value)}
          >
            <List.Item
              title={item.label}
              titleStyle={{ fontSize: 18 }}
              right={() =>
                selectedSort === item.value ? (
                  <Icon color={theme.colors.primary} source="check" size={24} />
                ) : null
              }
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
