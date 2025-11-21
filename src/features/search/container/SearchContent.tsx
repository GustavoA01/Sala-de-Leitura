import { styles } from "./styles"
import { ActivityIndicator, Text } from "react-native-paper"
import { FlatList } from "react-native-gesture-handler"
import { BookCard } from "../components/BookCard"
import { useGoogleBooksProvider } from "@/contexts/useGoogleBooksProvider"

export const SearchContent = () => {
  const { googleBooks, isLoadingGoogleBooks } = useGoogleBooksProvider()

  if (isLoadingGoogleBooks) {
    return (
      <ActivityIndicator style={{ marginTop: 16 }} animating={true} />
    )
  }

  return (
    <FlatList
      data={googleBooks ?? []}
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
