import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { useLocalSearchParams } from "expo-router"
import { StackHeader } from "@/components/StackHeader"
import { FormProvider } from "react-hook-form"
import { View } from "react-native"
import { FormFooter } from "@/features/form/components/FormFooter"
import { router } from "expo-router"
import { useBookForm } from "@/hooks/useBookForm"
import { Form } from "@/features/form/container/Form"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getGoogleBookById } from "@/api/getGoogleBooks"
import { useEffect } from "react"
import { getBookById } from "@/services/books"
import { statusLabel } from "@/data/constants"
import { BookType, GoogleBook } from "@/data/types"
import { BookFormType } from "@/data/schemas"

const BookFormScreen = () => {
  const { id, source } = useLocalSearchParams()

  const {
    selectedStatus,
    setSelectedStatus,
    label,
    setLabel,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleStartDateChange,
    handleEndDateChange,
    methods,
    handleSubmit,
    isValid,
    onCreateBook,
    onUpdate,
    reset,
    isLoading,
  } = useBookForm({ source: source as "google" | "firebase" })

  const { data: bookData } = useQuery<GoogleBook | BookType | null>({
    queryKey: ["book-data", id, source],
    queryFn: () => {
      if (!id) return null
      if (source === "google") {
        return getGoogleBookById(id as string)
      } else if (source === "firebase") {
        return getBookById(id as string)
      } else {
        return null
      }
    },
    enabled: !!id && !!source,
  })

  useEffect(() => {
    if (bookData) {
      if (source === "google") {
        const googleBook = bookData as GoogleBook
        reset({
          title: googleBook.volumeInfo.title,
          author: googleBook.volumeInfo.authors?.join(", ") ?? "",
          category: googleBook.volumeInfo.categories?.join(", ") ?? "",
        })
      } else {
        const book = bookData as BookType
        reset({
          title: book.title,
          author: book.author ?? "",
          category: book.category ?? "",
          rating: book.rating ?? undefined,
          description: book.description ?? "",
        })

        setSelectedStatus(book.status)
        setLabel(statusLabel[book.status].label)
        setStartDate(book.startDate ? book.startDate.toDate() : undefined)
        setEndDate(book.endDate ? book.endDate.toDate() : undefined)
      }
    }
  }, [bookData, reset])

  const onSubmit = (data: BookFormType) => {
    if (source === "firebase") {
      onUpdate(id as string, data)
    } else {
      onCreateBook(data)
    }
  }

  return (
    <SafeAreaWrapper>
      <StackHeader
        title={source === "firebase" ? "Editar livro" : "Adicionar livro"}
      />
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <FormProvider {...methods}>
          <Form
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            label={label}
            setLabel={setLabel}
            startDate={startDate}
            endDate={endDate}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
          />
        </FormProvider>
      </View>
      <FormFooter
        // @ts-ignore
        onSave={handleSubmit(onSubmit)}
        onCancel={() => router.back()}
        isValid={isValid}
        isLoading={isLoading}
      />
    </SafeAreaWrapper>
  )
}

export default BookFormScreen
