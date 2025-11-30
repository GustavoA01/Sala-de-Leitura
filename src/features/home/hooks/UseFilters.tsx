import { createContext, useContext, useState, PropsWithChildren } from "react"
import { useQuery } from "@tanstack/react-query"
import { getBooks, getBooksByStatus } from "@/services/books"

type FiltersContextType = {
  searchTerm?: string
  setSearchTerm?: (value: string) => void
  selectedFilter?: number | undefined
  setSelectedFilter?: (value: number | undefined) => void
  books?: any[]
  isLoading?: boolean
}

const FiltersContext = createContext<FiltersContextType>({});

export const FiltersProvider = ({ children }: PropsWithChildren) => {
  
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [selectedFilter, setSelectedFilter] = useState<number | undefined>(undefined)


  const { data: books, isLoading } = useQuery({
    queryKey: ["books", selectedFilter],
    queryFn: selectedFilter !== undefined ? () => getBooksByStatus(selectedFilter) : getBooks,
  })

  const filteredBooks = books?.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author?.toLowerCase().includes(searchTerm.toLowerCase())
  ) ?? []

  const displayBooks = searchTerm === "" ? books : filteredBooks

  return (
    <FiltersContext.Provider value={{ searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, books: displayBooks ?? [], isLoading }}>
      {children}
    </FiltersContext.Provider>
  )
}

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) {
    throw new Error("useFilters must be used within FiltersProvider")
  }
  return ctx;
}