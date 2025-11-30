import { useLists } from "@/features/lists/hook/useLists"
import { getBooks } from "@/services/books"
import { theme } from "@/theme"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { ActivityIndicator, Divider, List, Text } from "react-native-paper"

export const AddBookSheet = ({ listId }: { listId: string }) => {
  const queryClient = useQueryClient()
  const { updateListFn, lists } = useLists()

  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(undefined, "addedRecently"),
  })

  const handleAddToList = (listIdtoAdd: string, bookId: string) => {
    const list = lists?.find((list) => list.id === listIdtoAdd)
    if (list) {
      const newList = { ...list, books: [...list?.books, bookId] }
      queryClient.invalidateQueries({ queryKey: ["list-books", list.id] })
      updateListFn({ id: listIdtoAdd, list: newList })
    }
  }

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
            <TouchableOpacity onPress={() => handleAddToList(listId, item.id)}>
              <List.Item title={item.title} description={item.author} />
            </TouchableOpacity>
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
