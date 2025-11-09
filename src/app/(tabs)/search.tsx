import SafeAreaWrapper from "../../components/ui/SafeAreaWrapper"
import { Header } from "@/components/Header"
import { SearchContent } from "@/features/search/container/SearchContent"
import { SearchHeader } from "@/features/search/container/SearchHeader"

const SearchScreen = () => {
  return (
    <SafeAreaWrapper>
      <Header />
      <SearchHeader />
      <SearchContent />
    </SafeAreaWrapper>
  )
}

export default SearchScreen
