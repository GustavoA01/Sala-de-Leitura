import { Header } from "@/components/Header"
import { StackHeader } from "@/components/StackHeader"
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { Text } from "react-native-paper"
import { useLocalSearchParams } from "expo-router"
import { View } from "react-native"

const DetailsScreen = () => {
  const { id } = useLocalSearchParams()
  console.log(id)

  return (
    <SafeAreaWrapper>
      <StackHeader title="Detalhes" />
      <View style={{paddingHorizontal: 16}}>
      <Text>Detalhes</Text>

      </View>
    </SafeAreaWrapper>
  )
}

export default DetailsScreen