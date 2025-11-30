import { createContext, useContext, useState, PropsWithChildren } from "react"
import { useQuery } from "@tanstack/react-query"
import { getBooks } from "@/services/books"
import { FiltersContextType } from "@/data/types"

const FiltersContext = createContext<FiltersContextType>(
  {} as FiltersContextType
)

export const FiltersProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedSort, setSelectedSort] = useState<string>("")

  const [selectedFilter, setSelectedFilter] = useState<number | undefined>(
    undefined
  )

  const { data: books, isLoading } = useQuery({
    queryKey: ["books", selectedFilter, selectedSort],
    queryFn: () => getBooks(selectedFilter, selectedSort),
  })

  const filteredBooks =
    books?.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchTerm.toLowerCase())
    ) ?? []

  const displayBooks = searchTerm === "" ? books : filteredBooks

  const value = {
    searchTerm,
    setSearchTerm,
    selectedFilter,
    setSelectedFilter,
    selectedSort,
    setSelectedSort,
    books: displayBooks ?? [],
    isLoading,
  }

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  )
}

export const useFilters = (): FiltersContextType => {
  const ctx = useContext(FiltersContext)
  if (!ctx) {
    throw new Error("useFilters must be used within FiltersProvider")
  }
  return ctx
}
