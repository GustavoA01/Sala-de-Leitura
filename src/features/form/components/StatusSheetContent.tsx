import { statusLabel } from "@/data/constants"
import { TouchableOpacity, View } from "react-native"
import { Icon, List, Text } from "react-native-paper"

type StatusSheetContentProps = {
  handleSelectStatus: (status: number) => void
  selectedStatus: number
}

export const StatusSheetContent = ({
  selectedStatus,
  handleSelectStatus,
}: StatusSheetContentProps) => {
  return (
    <View style={{ padding: 16 }}>
      <Text
        variant="headlineSmall"
        style={{ color: "white", marginBottom: 10 }}
      >
        Status:
      </Text>
      <View>
        {statusLabel.map((status) => {
          return (
            <TouchableOpacity key={status.value} onPress={() => handleSelectStatus(status.value)}>
              <List.Item
                title={status.label}
                titleStyle={{ fontSize: 18 }}
                right={() =>
                  status.value === selectedStatus ? (
                    <Icon
                      color={status.color}
                      source="check"
                      size={24}
                    />
                  ) : null
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
