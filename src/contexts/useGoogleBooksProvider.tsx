import { getGoogleBooks } from "@/api/getGoogleBooks"
import { createContext, useState } from "react"
import { useContext } from "react"
import { useQuery } from "@tanstack/react-query"
import { GoogleBooksContextType } from "@/data/types"

export const GoogleBooksContext = createContext<
  GoogleBooksContextType | undefined
>(undefined)

export const GoogleBooksProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [query, setQuery] = useState("")

  const { data: googleBooks, isLoading: isLoadingGoogleBooks } = useQuery({
    queryKey: ["google-books", query],
    queryFn: () => getGoogleBooks(query),
  })

  const value = {
    googleBooks,
    setQuery,
    isLoadingGoogleBooks,
  }

  return (
    <GoogleBooksContext.Provider value={value}>
      {children}
    </GoogleBooksContext.Provider>
  )
}

export const useGoogleBooksProvider = () => {
  const context = useContext(GoogleBooksContext)
  if (!context) {
    throw new Error(
      "useGoogleBooksProvider deve ser usado dentro de GoogleBooksProvider"
    )
  }
  return { ...context }
}
