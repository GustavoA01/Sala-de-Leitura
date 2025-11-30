import { useRef, useState } from "react"
import { usePathname } from "expo-router"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteBook } from "@/services/books"
import { Alert } from "react-native"
import { router } from "expo-router"
import { useLists } from "@/features/lists/hook/useLists"

export const useBookAccordion = () => {
  const queryClient = useQueryClient()
  const { lists, updateListFn } = useLists()
  const bottomSheetRef = useRef<any>(null)
  const listBottomSheet = useRef<any>(null)
  const onOpenBottomSheet = () => bottomSheetRef.current?.open()
  const pathname = usePathname()
  const isListPathName = pathname.includes("/list-details")

  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const { mutateAsync: deleteBookFn } = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] })
      Alert.alert("Livro deletado com sucesso")
    },
  })

  const handleEdit = (id: string) => {
    bottomSheetRef.current?.close()
    router.push({
      pathname: "/book-form",
      params: {
        id,
        source: "firebase",
      }
    })
  }

  const handleAddToList = () => {
    bottomSheetRef.current?.close()
    listBottomSheet.current?.open()
  }

  const onDelete = () => {
    bottomSheetRef.current?.close()
    showModal()
  }

  const handelDeleteBook = (id: string) => {
    hideModal()
    deleteBookFn(id).then(() => {
      if (isListPathName) {
        handleRemoveFromList(id)
        queryClient.invalidateQueries({ queryKey: ["lists"] })
        queryClient.invalidateQueries({ queryKey: ["list-books"] })
      }
    })
  }

  const handleRemoveFromList = (id: string) => {
    const list = lists?.find((list) => list.books.includes(id))
    if (list) {
      const newList = { ...list, books: list?.books.filter((book) => book !== id) }
      updateListFn({ id: list.id, list: newList })
      queryClient.invalidateQueries({ queryKey: ["list-books", list.id] })
      bottomSheetRef.current?.close()
    }
  }

  return {
    onOpenBottomSheet,
    isListPathName,
    visible,
    showModal,
    hideModal,
    deleteBookFn,
    handleEdit,
    handleAddToList,
    onDelete,
    handelDeleteBook,
    handleRemoveFromList,
    bottomSheetRef,
    listBottomSheet,
  }
}