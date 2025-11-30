import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { StackHeader } from "@/components/StackHeader"
import { useLocalSearchParams } from "expo-router"
import { AddButton } from "@/components/ui/AddButton"
import { ListAccordion } from "@/components/ListAccordion"
import { ActivityIndicator, List, Text } from "react-native-paper"
import { theme } from "@/theme"
import { useQuery } from "@tanstack/react-query"
import { getListById } from "@/services/lists"
import { useRef } from "react"
import { CustomBottomSheet } from "@/components/ui/CustomBottomSheet"
import { AddBookSheet } from "@/features/lists/container/AddBookSheet"
import { getListBooks } from "@/services/lists/getListBooks"

const ListDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const editListBottomSheetRef = useRef<any>(null)
  const onOpenBottomSheet = () => editListBottomSheetRef.current?.open()

  const { data: list, isLoading } = useQuery({
    queryKey: ["list", id],
    queryFn: () => getListById(id as string),
    enabled: !!id,
  })

  const { data: listBooks, isLoading: isLoadingListBooks } = useQuery({
    queryKey: ["list-books", id],
    queryFn: () => getListBooks(id as string),
    enabled: !!id,
  })  

  if (isLoading) {
    return (
      <SafeAreaWrapper>
        <ActivityIndicator
          style={{ alignSelf: "center", marginTop: 16 }}
          animating={true}
        />
      </SafeAreaWrapper>
    )
  }

  return (
    <SafeAreaWrapper>
      <StackHeader title={list?.title ?? "Detalhes da lista"} />

      <Text
        style={{ margin: 16, color: theme.colors.onSurfaceVariant }}
        variant="titleMedium"
      >
        {list?.description}
      </Text>
      <AddButton
        onPress={onOpenBottomSheet}
        style={{ alignSelf: "flex-end", marginBottom: 16 }}
      />

      {isLoadingListBooks && <ActivityIndicator style={{ marginTop: 16 }} />}
      
      {listBooks && listBooks.length > 0 ? (
        <ListAccordion data={listBooks ?? []} />
      ) : (
        <Text style={{ textAlign: "center", marginTop: 16 }}>
          Nenhum livro adicionado
        </Text>
      )}

      <CustomBottomSheet height={500} bottomSheetRef={editListBottomSheetRef}>
        <AddBookSheet listId={id as string} />
      </CustomBottomSheet>
    </SafeAreaWrapper>
  )
}

export default ListDetailsScreen
