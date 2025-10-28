import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { IconButton, Text } from "react-native-paper"
import { router, useLocalSearchParams } from "expo-router"

const BookFormScreen = () => {
  const { id } = useLocalSearchParams()
  console.log(id)
  return (
    <SafeAreaWrapper>
      <IconButton icon="arrow-left" onPress={() => router.back()} />
      <Text>Formulário de Livro</Text>
    </SafeAreaWrapper>
  )
}

export default BookFormScreen