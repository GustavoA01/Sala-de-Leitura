import { getBooks } from "@/services/books"
import { theme } from "@/theme"
import { useQuery } from "@tanstack/react-query"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { ActivityIndicator, Divider, List, Text } from "react-native-paper"

export const AddBookSheet = () => {
  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  })

  return (
    <>
      <View style={{ padding: 12 }}>
        <Text variant="titleMedium">
          Selecione um livro para adicionar à lista
        </Text>
        <Divider
          style={{ marginTop: 12, backgroundColor: theme.colors.primary }}
        />
      </View>

      {isLoading && <ActivityIndicator style={{ marginTop: 16 }} />}

      {books && books.length > 0 ? (
        <FlatList
          data={books ?? []}
          style={{ marginBottom: 16 }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              description={item.author}
              onPress={() => {}}
            />
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 16 }}>
          Nenhum livro encontrado
        </Text>
      )}
    </>
  )
}
