import { ListAccordion } from "@/components/ListAccordion"
import { useQuery } from "@tanstack/react-query"
import { getBooks } from "@/services/books"
import { Text } from "react-native-paper"

export const HomeList = () => {
  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  })

  return books !== undefined && books.length > 0 ? (
    <ListAccordion data={books ?? []} />
  ) : (
    <Text style={{ textAlign: "center", marginTop: 16 }}>
      Nenhum livro adicionado
    </Text>
  )
}
