import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { useLocalSearchParams } from "expo-router"
import { StackHeader } from "@/components/StackHeader"
import { FormProvider } from "react-hook-form"
import { View } from "react-native"
import { FormFooter } from "@/features/form/components/FormFooter"
import { router } from "expo-router"
import { useBookForm } from "@/hooks/useBookForm"
import { Form } from "@/features/form/container/Form"

const BookFormScreen = () => {
  const { id } = useLocalSearchParams()
  const isEditing = !!id
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
  } = useBookForm()

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
