import { Header } from "@/components/Header"
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { HomeFilters } from "@/features/home/HomeFilters"
import { HomeList } from "@/features/home/HomeList"

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Header />
      <HomeFilters />
      <HomeList />
    </SafeAreaWrapper>
  )
}

export default HomeScreen
