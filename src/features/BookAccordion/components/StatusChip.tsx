import { View } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "../container/styles"
import { theme } from "@/theme"
import { statusLabel } from "@/data/constants"

export const StatusChip = ({ status }: { status: number }) => {
  return (
    <View
      style={[
        styles.statusChip,
        { backgroundColor: statusLabel[status].color },
      ]}
    >
      <Text variant="titleMedium" style={styles.statusLabel}>
        {statusLabel[status].label}
      </Text>
    </View>
  )
}
