import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AddListFormType, addListSchema } from "@/data/schemas"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createList, deleteList, getListById, getLists, updateList } from "@/services/lists"
import { Alert } from "react-native"
import { ListType } from "@/data/types"

type UpdateListParams = { id: string, list: Partial<ListType> }

export const useLists = () => {
  const queryClient = useQueryClient()
  const methods = useForm<AddListFormType>({
    resolver: zodResolver(addListSchema),
  })

  const editListBottomSheetRef = useRef<any>(null)
  const [visible, setVisible] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const showDeleteModal = () => setDeleteModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);

  const onDeleteList = () => {
    onCloseBottomSheet()
    showDeleteModal()
  }

  const onOpenAddListModal = async (id?: string) => {
    if (id !== undefined) {
      setIsEditing(true)
      const list = await getListById(id)

      methods.reset({
        title: list.title ?? "",
        listDescription: list.description ?? "",
      })
    }
    setVisible(true)
    editListBottomSheetRef.current?.close()
  }

  const onCloseAddListModal = () => {
    methods.reset({
      title: "",
      listDescription: "",
    })
    setVisible(false)
    setIsEditing(false)
  }

  const [listTitle, setListTitle] = useState<string>("")
  const [listId, setListId] = useState<string>("")

  const onOpenBottomSheet = (item: { title: string; id: string }) => {
    editListBottomSheetRef.current?.open()
    setListTitle(item.title)
    setListId(item.id)
  }

  const onCloseBottomSheet = () => {
    editListBottomSheetRef.current?.close()
  }

  const formatDescription = (booksLength: number) => {
    if (booksLength > 0) return `${booksLength} livro${booksLength > 1 ? "s" : ""}`
    return "Nenhum livro adicionado"
  }

  const { data: lists, isLoading: isLoadingLists } = useQuery({
    queryKey: ["lists"],
    queryFn: getLists,
  })

  const { mutateAsync: createListFn, isPending: isCreatingListLoading } = useMutation({
    mutationFn: createList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] })
      setTimeout(() => {
        onCloseAddListModal()
        Alert.alert("Lista criada com sucesso")
        methods.reset({
          title: "",
          listDescription: "",
        })
      }, 1000)
    },
    onError: () => {
      Alert.alert("Erro ao adicionar lista")
    }
  })

  const onCreateList = async (data: AddListFormType) => {
    try {
      await createListFn({ title: data.title, description: data.listDescription })
    } catch (error) {
      console.log(error)
    }
  }

  const { mutateAsync: updateListFn, isPending: isUpdatingListLoading } = useMutation({
    mutationFn: (updateListParams: UpdateListParams) => updateList(updateListParams.id, updateListParams.list),
    onSuccess: () => {
      setIsEditing(false)
      queryClient.invalidateQueries({ queryKey: ["lists"] })
      onCloseAddListModal()
      Alert.alert("Lista atualizada com sucesso")
    },
    onError: () => {
      Alert.alert("Erro ao atualizar lista")
    }
  })

  const onUpdateList = async (data: AddListFormType) => {
    try {
      await updateListFn({
        id: listId,
        list: { title: data.title, description: data.listDescription }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const { mutateAsync: deleteListFn } = useMutation({
    mutationFn: deleteList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] })
      hideDeleteModal()
      Alert.alert("Lista deletada com sucesso")
    },
    onError: () => {
      Alert.alert("Erro ao deletar lista")
    }
  })

  const confirmDeleteList = () => {
    deleteListFn(listId)
  }

  return {
    lists,
    isLoadingLists,
    isCreatingListLoading,
    editListBottomSheetRef,
    visible,
    onOpenAddListModal,
    onCloseAddListModal,
    listTitle,
    listId,
    onOpenBottomSheet,
    onCloseBottomSheet,
    formatDescription,
    methods,
    onCreateList,
    onUpdateList,
    isEditing,
    updateListFn,
    onDeleteList,
    confirmDeleteList,
    deleteModalVisible,
    showDeleteModal,
    hideDeleteModal,
  }
}