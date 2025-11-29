import { theme } from "@/theme"
import { IconButton, List } from "react-native-paper"
import { styles } from "../container/styles"
import { TouchableOpacity } from "react-native"
import { router } from "expo-router"

type ListItemProps = {
  id: string
  title: string
  description: string
  onPressIcon: () => void
}

export const ListItem = ({ id, title, description, onPressIcon }: ListItemProps) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => router.push(`/list-details/${id}`)}>
      <List.Item
        title={title}
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
