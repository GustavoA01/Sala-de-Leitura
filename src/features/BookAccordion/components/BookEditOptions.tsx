import { TouchableOpacity, View } from "react-native"
import { Divider, List, Text } from "react-native-paper"
import { theme } from "@/theme"

type BookEditOptionsProps = {
  bookTitle: string
  onEdit: () => void
  onAddToList: () => void
  onRemoveFromList?: () => void
  onDelete: () => void
}

export const BookEditOptions = ({
  bookTitle,
  onEdit,
  onAddToList,
  onRemoveFromList,
  onDelete,
}: BookEditOptionsProps) => {
  const options = [
    {
      title: "Editar",
      icon: "pencil",
      color: theme.colors.secondary,
      onPress: onEdit,
    },
    {
      title: "Adicionar a uma lista",
      icon: "playlist-plus",
      color: theme.colors.primaryContainer,
      onPress: onAddToList,
    },
    {
      title: "Excluir",
      icon: "trash-can-outline",
      color: theme.colors.error,
      onPress: onDelete,
    },
  ]

  if (onRemoveFromList) {
    options.splice(2, 0, {
      title: "Remover da lista",
      icon: "playlist-minus",
      color: theme.colors.error,
      onPress: onRemoveFromList,
    })
  }

  return (
    <View style={{ padding: 16 }}>
      <Text
        variant="titleLarge"
        style={{ color: theme.colors.onSurface, fontWeight: "bold" }}
      >
        {bookTitle}
      </Text>

      <Divider
        bold
        style={{ marginVertical: 12, backgroundColor: theme.colors.primary }}
      />

      <List.Section>
        {options.map((option) => (
          <TouchableOpacity key={option.title} onPress={option.onPress}>
            <List.Item
              title={option.title}
              titleStyle={{ color: theme.colors.onSurface }}
              left={(props) => (
                <List.Icon {...props} color={option.color} icon={option.icon} />
              )}
            />
          </TouchableOpacity>
        ))}
      </List.Section>
    </View>
  )
}
