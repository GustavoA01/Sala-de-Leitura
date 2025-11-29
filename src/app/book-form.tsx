import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { useLocalSearchParams } from "expo-router"
import { StackHeader } from "@/components/StackHeader"
import { FormProvider } from "react-hook-form"
import { View } from "react-native"
import { FormFooter } from "@/features/form/components/FormFooter"
import { router } from "expo-router"
import { useBookForm } from "@/hooks/useBookForm"
import { Form } from "@/features/form/container/Form"
import { useQuery } from "@tanstack/react-query"
import { getGoogleBookById } from "@/api/getGoogleBooks"
import { useEffect } from "react"
import { ActivityIndicator } from "react-native-paper"

const BookFormScreen = () => {
  const { id } = useLocalSearchParams()
  const isEditing = id === undefined ? false : true
  const {
    selectedStatus,
    setSelectedStatus,
    label,
    setLabel,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    methods,
    handleSubmit,
    isValid,
    onSubmit,
    reset,
  } = useBookForm()

  const { data: googleBook } = useQuery({
    queryKey: ["google-book", id],
    queryFn: () => getGoogleBookById(id as string),
    enabled: isEditing,
  })

  useEffect(() => {
    if (googleBook) {
      reset({
        title: googleBook.volumeInfo.title,
        author: googleBook.volumeInfo.authors?.join(", ") ?? "",
        category: googleBook.volumeInfo.categories?.join(", ") ?? "",
      })
    }
  }, [googleBook, reset])

  return (
    <SafeAreaWrapper>
      <StackHeader title={isEditing ? "Editar livro" : "Adicionar livro"} />
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
      />
    </SafeAreaWrapper>
  )
}

export default BookFormScreen
