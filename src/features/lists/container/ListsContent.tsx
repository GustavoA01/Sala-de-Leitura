import { AddButton } from "@/components/ui/AddButton"
import { FlatList, View } from "react-native"
import { ListItem } from "../components/ListItem"
import { styles } from "./styles"
import { useRef, useState } from "react"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import { ListActionsModal } from "../components/ListActionsModal"

const lists = [
  {
    id: "1",
    title: "Meus Favoritos",
    books: [
      { id: "b1", title: "Duna" },
      { id: "b2", title: "Neuromancer" },
      { id: "b3", title: "1984" },
      { id: "b4", title: "Admirável Mundo Novo" },
      { id: "b5", title: "O Conto da Aia" },
    ],
  },
  {
    id: "2",
    title: "Ficção Científica",
    books: [],
  },
]

export const LibraryContent = () => {
  const bottomSheetRef = useRef<any>(null)
  const [listTitle, setListTitle] = useState<string>("")
  const [listId, setListId] = useState<string>("")

  const onOpenBottomSheet = (item: { title: string, id: string }) => {
    bottomSheetRef.current?.open()
    setListTitle(item.title)
    setListId(item.id)
  }

  const formatDescription = (booksLength: number) => {
    if (booksLength > 0) {
      return `${booksLength} livro${booksLength > 1 ? "s" : ""}`
    }
    return "Nenhum livro adicionado"
  }

  return (
    <View style={styles.container}>
      <AddButton onPress={() => {}} style={styles.addButton} />
      <View>
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
              id={item.id}
              title={item.title}
              description={formatDescription(item.books.length)}
              onPress={() => {}}
              onPressIcon={() => {onOpenBottomSheet(item)}}
            />
          )}
        />
      </View>
      <CustomBottomSheet height={230} bottomSheetRef={bottomSheetRef}>
        <ListActionsModal listTitle={listTitle} listId={listId} />
      </CustomBottomSheet>
    </View>
  )
}
