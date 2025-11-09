import { theme } from "@/theme"
import { IconButton, List } from "react-native-paper"
import { styles } from "../container/styles"
import { TouchableOpacity } from "react-native"

type ListItemProps = {
  title: string
  description: string
  onPress: () => void
  onPressIcon: () => void
}

export const ListItem = ({ title, description, onPress, onPressIcon }: ListItemProps) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <List.Item
        title={title}
        onPress={onPress}
        style={styles.listItem}
        description={description}
        right={() => (
          <IconButton
            icon="dots-vertical"
            size={24}
            iconColor={theme.colors.onSurfaceVariant}
            onPress={onPressIcon}
          />
        )}
      />
    </TouchableOpacity>
  )
}
