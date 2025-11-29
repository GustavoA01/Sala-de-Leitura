import { useLists } from "@/features/lists/hook/useLists"
import { theme } from "@/theme"
import {  TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { ActivityIndicator, Divider, List, Text } from "react-native-paper"

export const AddToListSheet = ({ bookId }: { bookId: string }) => {
  const { updateListFn, lists, isLoadingLists } = useLists()

  const handleAddToList = (listId: string) => {
    const list = lists?.find((list) => list.id === listId)
    if (list) {
      const newList = { ...list, books: [...list?.books, bookId] }
      updateListFn({ id: listId, list: newList })
    }
  }

  return (
    <>
      <View style={{ padding: 12 }}>
        <Text variant="titleMedium">
          Selecione uma lista para adicionar o livro
        </Text>
        <Divider
          style={{ marginTop: 12, backgroundColor: theme.colors.primary }}
        />
      </View>

      {isLoadingLists && <ActivityIndicator style={{ marginTop: 16 }} />}

      {lists && lists.length > 0 ? (
        <FlatList
          data={lists ?? []}
          style={{ marginBottom: 16 }}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleAddToList(item.id)}>
              <List.Item
                title={item.title}
                description={item.description}
                descriptionNumberOfLines={1}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 16 }}>
          Nenhuma lista encontrada
        </Text>
      )}
    </>
  )
}
