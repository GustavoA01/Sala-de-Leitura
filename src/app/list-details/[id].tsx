import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { StackHeader } from "@/components/StackHeader"
import { useLocalSearchParams, usePathname } from "expo-router"
import { AddButton } from "@/components/ui/AddButton"
import { ListAccordion } from "@/components/ListAccordion"
import { accordionMock } from "@/data/mocks"
import { Text } from "react-native-paper"
import { theme } from "@/theme"

const ListDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  
  return (
    <SafeAreaWrapper>
      <StackHeader title="Detalhes da lista" />
      <Text
        style={{ margin: 16, color: theme.colors.onSurfaceVariant }}
        variant="titleMedium"
      >
        Melhores livros de fantasia e ficção científica que li nos últimos cinco
        anos
      </Text>
      <AddButton onPress={() => {}} style={{ alignSelf: "flex-end" }} />
      <ListAccordion data={accordionMock} />
    </SafeAreaWrapper>
  )
}

export default ListDetailsScreen
