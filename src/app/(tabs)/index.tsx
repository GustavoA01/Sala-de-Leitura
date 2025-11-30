import { Header } from "@/components/Header"
import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { HomeFilters } from "@/features/home/HomeFilters"
import { HomeList } from "@/features/home/HomeList"
import { FiltersProvider } from "@/features/home/hooks/UseFilters"

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <Header />
      <FiltersProvider>
        <HomeFilters />
        <HomeList />
      </FiltersProvider>
    </SafeAreaWrapper>
  )
}

export default HomeScreen
