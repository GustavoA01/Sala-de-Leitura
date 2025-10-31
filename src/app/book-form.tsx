import SafeAreaWrapper from "@/components/ui/SafeAreaWrapper"
import { useLocalSearchParams } from "expo-router"
import { StackHeader } from "@/components/StackHeader"
import { InputTitleAuthor } from "@/features/form/components/InputTitleAuthor"
import { FormProvider, useForm } from "react-hook-form"
import { ScrollView } from "react-native-gesture-handler"
import { View } from "react-native"
import { InputCategoryStatus } from "@/features/form/components/InputCategoryStatus"
import { statusLabel } from "@/data/constants"
import { useState } from "react"
import { InputDates } from "@/features/form/components/InputDates"
import { BookFormType } from "@/data/types"


const BookFormScreen = () => {
  const { id } = useLocalSearchParams()
  const isEditing = !!id

  const [selectedStatus, setSelectedStatus] = useState<number>(0)
  const [label, setLabel] = useState<string>(statusLabel[selectedStatus].label)

  const methods = useForm<BookFormType>({
    defaultValues: {
      title: "",
      author: "",
      description: "",
      rating: 0,
    },
  })

  return (
    <SafeAreaWrapper>
      <StackHeader title={isEditing ? "Editar Livro" : "Adicionar Livro"} />
      <View style={{ paddingHorizontal: 16 }}>
        <FormProvider {...methods}>
          <ScrollView>
            <InputTitleAuthor />
            <InputCategoryStatus
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              label={label}
              setLabel={setLabel}
            />
            <InputDates />
          </ScrollView>
        </FormProvider>
      </View>
    </SafeAreaWrapper>
  )
}

export default BookFormScreen
