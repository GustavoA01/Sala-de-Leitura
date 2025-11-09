import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { Header } from "@/components/Header"
import { ListsContainer } from "@/features/lists/container/ListsContainer"

const LibraryScreen = () => {
  return (
    <SafeAreaWrapper>
      <Header />
      <ListsContainer />
    </SafeAreaWrapper>
  )
}

export default LibraryScreen
