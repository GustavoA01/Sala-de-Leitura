import { StackHeader } from "@/components/StackHeader"
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { useLocalSearchParams } from "expo-router"
import { booksMock } from "@/data/constants"
import { BookDetails } from "@/features/details/container/BookDetails"

const DetailsScreen = () => {
  const { id } = useLocalSearchParams()
  console.log(id)

  const book = booksMock.find((b) => b.id === id) || booksMock[0]

  return (
    <SafeAreaWrapper>
      <StackHeader title="Detalhes" />
      <BookDetails book={book} />
    </SafeAreaWrapper>
  )
}

export default DetailsScreen
