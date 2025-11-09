import { router } from "expo-router"
import { Image, Pressable } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "../container/styles"

export const BookCard = ({ item }: { item: any }) => (
  <Pressable
    style={styles.card}
    onPress={() => router.push(`/details/${item.id}`)}
  >
    <Image
      source={{ uri: item.imageLinks.thumbnail }}
      style={styles.cardImage}
    />
    <Text style={styles.bookTitle} numberOfLines={2}>
      {item.title}
    </Text>
    <Text style={styles.bookAuthor} numberOfLines={1}>
      {item.author || "Autor desconhecido"}
    </Text>
  </Pressable>
)
