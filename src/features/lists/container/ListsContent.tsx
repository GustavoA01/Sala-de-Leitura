import { AddButton } from "@/components/ui/AddButton"
import { FlatList, View } from "react-native"
import { ListItem } from "../components/ListItem"
import { styles } from "./styles"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import { ListActionsModal } from "../components/ListActionsModal"
import { AddListModal } from "../components/AddListModal"
import { ActivityIndicator, Modal, Portal, Text } from "react-native-paper"
import { useLists } from "../hook/useLists"
import { FormProvider } from "react-hook-form"
import { AddListFormType } from "@/data/schemas"
import { ConfirmDeleteModal } from "../components/ConfirmDeleteModal"

export const LibraryContent = () => {
  const {
    editListBottomSheetRef,
    visible,
    onOpenAddListModal,
    onCloseAddListModal,
    listTitle,
    listId,
    onOpenBottomSheet,
    formatDescription,
    methods,
    onCreateList,
    onUpdateList,
    lists,
    isLoadingLists,
    isCreatingListLoading,
    isEditing,
    onCloseBottomSheet,
    confirmDeleteList,
    onDeleteList,
    deleteModalVisible,
    hideDeleteModal,
  } = useLists()

  const onSubmit = (data: AddListFormType) => {
    if (isEditing) {
      onUpdateList(data)
    } else {
      onCreateList(data)
    }
  }

  return (
    <View style={styles.container}>
      <AddButton
        onPress={() => onOpenAddListModal(undefined)}
        style={styles.addButton}
      />
      {isLoadingLists && <ActivityIndicator style={{ marginTop: 16 }} />}

      {lists !== undefined && lists.length > 0 ? (
        <FlatList
          data={lists ?? []}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ListItem
              id={item.id}
              title={item.title}
              description={formatDescription(item.books.length)}
              onPressIcon={() => onOpenBottomSheet(item)}
            />
          )}
        />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 16 }}>
          Nenhuma lista adicionada
        </Text>
      )}

      <CustomBottomSheet height={230} bottomSheetRef={editListBottomSheetRef}>
        <ListActionsModal
          onDeleteList={onDeleteList}
          onOpenAddListModal={onOpenAddListModal}
          listTitle={listTitle}
          listId={listId}
          onCloseBottomSheet={onCloseBottomSheet}
        />
      </CustomBottomSheet>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={onCloseAddListModal}
          contentContainerStyle={styles.addModalContainer}
        >
          <FormProvider {...methods}>
            <AddListModal
              isCreatingListLoading={isCreatingListLoading}
              onCloseAddListModal={onCloseAddListModal}
              onSubmit={methods.handleSubmit(onSubmit)}
              isEditing={isEditing}
            />
          </FormProvider>
        </Modal>
      </Portal>

      <Portal>
        <ConfirmDeleteModal
          deleteModalVisible={deleteModalVisible}
          hideDeleteModal={hideDeleteModal}
          confirmDeleteList={confirmDeleteList}
        />
      </Portal>
    </View>
  )
}
