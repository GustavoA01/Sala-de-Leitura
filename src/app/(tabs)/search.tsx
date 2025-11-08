import { useState } from "react"
import { View, StyleSheet, FlatList, Pressable } from "react-native"
import { Text, Avatar } from "react-native-paper"
import { useForm } from "react-hook-form"
import { useRouter } from "expo-router"
import SafeAreaWrapper from "../../components/ui/SafeAreaWrapper"
import { SearchController } from "@/components/SearchController"
import { mockData } from "@/data/constants"
import { BookType } from "@/data/types"
import { theme } from "@/theme"

const SearchScreen = () => {
  const { control } = useForm()
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const filteredBooks = mockData.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const renderBookCard = ({ item }: { item: BookType }) => (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/details/${item.id}`)}
    >
      <View style={styles.cardImage}>
        <Text style={styles.cardPlaceholder}>{item.title.substring(0, 3).toUpperCase()}</Text>
      </View>
      <Text style={styles.bookTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.bookAuthor} numberOfLines={1}>
        {item.author || "Autor desconhecido"}
      </Text>
    </Pressable>
  )

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Buscar</Text>
          <Avatar.Icon
            size={48}
            icon="account"
            style={styles.avatar}
          />
        </View>

        <View style={styles.searchContainer}>
          <SearchController control={control} handleSearch={handleSearch} />
        </View>

        <FlatList
          data={filteredBooks}
          renderItem={renderBookCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </SafeAreaWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: theme.colors.onSurface,
  },
  avatar: {
    backgroundColor: theme.colors.surfaceVariant,
  },
  searchContainer: {
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: "48%",
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  cardImage: {
    width: "100%",
    aspectRatio: 0.7,
    backgroundColor: theme.colors.surfaceVariant,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  cardPlaceholder: {
    fontSize: 48,
    fontWeight: "bold",
    color: theme.colors.onSurface,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.onSurface,
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: theme.colors.onSurfaceVariant,
  },
})

export default SearchScreen