import { ListAccordion } from "@/components/ListAccordion"
import { ActivityIndicator, Text } from "react-native-paper"
import { useFilters } from "./hooks/UseFilters"

export const HomeList = () => {
  const { books, isLoading } = useFilters();

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
