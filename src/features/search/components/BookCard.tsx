import { router } from "expo-router"
import { Image, Pressable } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "../container/styles"
import { GoogleBook } from "@/data/types"

export const BookCard = ({ item }: { item: GoogleBook }) => (
  <Pressable
    style={styles.card}
    onPress={() => router.push(`/details/${item.id}`)}
  >
    {item.volumeInfo.imageLinks?.thumbnail ? (
      <Image
        source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
        style={styles.cardImage}
      />
    ) : (
      <Image
        source={require("../../../../assets/not-avaiable.jpg")}
        style={[styles.cardImage, { height: 250, width: "100%" }]}
      />
    )}
    <Text style={styles.bookTitle} numberOfLines={2}>
      {item.volumeInfo.title}
    </Text>
    <Text style={styles.bookAuthor} numberOfLines={1}>
      {item.volumeInfo.authors?.[0] ?? "Autor desconhecido"}
    </Text>
  </Pressable>
)
