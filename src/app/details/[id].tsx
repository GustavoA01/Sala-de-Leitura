import { StackHeader } from "@/components/StackHeader"
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { useLocalSearchParams } from "expo-router"
import { BookDetails } from "@/features/details/container/BookDetails"
import { getGoogleBookById } from "@/api/getGoogleBooks"
import { useQuery } from "@tanstack/react-query"
import { GoogleBook } from "@/data/types"
import { ActivityIndicator } from "react-native-paper"

const DetailsScreen = () => {
  const { id } = useLocalSearchParams()

  const { data: googleBook, isLoading } = useQuery({
    queryKey: ["google-book", id],
    queryFn: () => getGoogleBookById(id as string),
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
      <StackHeader title={googleBook?.volumeInfo.title ?? "Detalhes"} />
      <BookDetails book={googleBook as GoogleBook} />
    </SafeAreaWrapper>
  )
}

export default DetailsScreen
