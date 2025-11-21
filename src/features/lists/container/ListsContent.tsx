import { AddButton } from "@/components/ui/AddButton"
import { FlatList, View } from "react-native"
import { ListItem } from "../components/ListItem"
import { styles } from "./styles"
import { useRef, useState } from "react"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import { ListActionsModal } from "../components/ListActionsModal"
import { AddListModal } from "../components/AddListModal"
import { Modal, Portal } from "react-native-paper"
import { mockLists } from "@/data/mocks"

export const LibraryContent = () => {
  const editListBottomSheetRef = useRef<any>(null)
  const [visible, setVisible] = useState(false)

  const onOpenAddListModal = () => {
    setVisible(true)
    editListBottomSheetRef.current?.close()
  }
  const onCloseAddListModal = () => setVisible(false)

  const [listTitle, setListTitle] = useState<string>("")
  const [listId, setListId] = useState<string>("")

  const onOpenBottomSheet = (item: { title: string; id: string }) => {
    editListBottomSheetRef.current?.open()
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
      <AddButton onPress={onOpenAddListModal} style={styles.addButton} />
      <FlatList
        data={mockLists}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            title={item.title}
            description={formatDescription(item.books.length)}
            onPress={() => {}}
            onPressIcon={() => {
              onOpenBottomSheet(item)
            }}
          />
        )}
      />

      <CustomBottomSheet height={230} bottomSheetRef={editListBottomSheetRef}>
        <ListActionsModal
          onOpenAddListModal={onOpenAddListModal}
          listTitle={listTitle}
          listId={listId}
        />
      </CustomBottomSheet>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={onCloseAddListModal}
          contentContainerStyle={styles.addModalContainer}
        >
          <AddListModal
            onCloseAddListModal={onCloseAddListModal}
            listId={listId}
          />
        </Modal>
      </Portal>
    </View>
  )
}
