import { styles } from "./styles"
import { Text } from "react-native-paper"
import { FlatList } from "react-native-gesture-handler"
import { BookCard } from "../components/BookCard"
import { booksMock } from "@/data/mocks"

export const SearchContent = () => {
  return (
    <FlatList
      data={booksMock}
      renderItem={({ item }) => <BookCard item={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.listContainer}
      columnWrapperStyle={styles.columnWrapper}
      ListEmptyComponent={<Text>Nenhum livro encontrado</Text>}
    />
  )
}
