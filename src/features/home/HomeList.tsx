import { ListAccordion } from "@/components/ListAccordion"
import { useQuery } from "@tanstack/react-query"
import { getBooks } from "@/services/books"
import { ActivityIndicator, Text } from "react-native-paper"

export const HomeList = () => {
  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  })

  if (isLoading) {
    return <ActivityIndicator style={{ marginTop: 16 }} />
  }

  return books !== undefined && books.length > 0 ? (
    <ListAccordion data={books ?? []} />
  ) : (
    <Text style={{ textAlign: "center", marginTop: 16 }}>
      Nenhum livro adicionado
    </Text>
  )
}
