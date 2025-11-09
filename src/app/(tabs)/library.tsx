import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { Header } from "@/components/Header"
import { LibraryContent } from "@/features/lists/container/ListsContent"

const LibraryScreen = () => {
  return (
    <SafeAreaWrapper>
      <Header />
      <LibraryContent />
    </SafeAreaWrapper>
  )
}

export default LibraryScreen
