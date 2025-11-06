import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookFormSchema, BookFormType } from "@/data/schemas"
import { statusLabel } from "@/data/constants"
import { Alert } from "react-native"
import { BookType } from "@/data/types"

export const useBookForm = () => {
  const [selectedStatus, setSelectedStatus] = useState<number>(0)
  const [label, setLabel] = useState<string>(statusLabel[selectedStatus].label)
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const methods = useForm<BookFormType>({
    // @ts-ignore
    resolver: zodResolver(bookFormSchema),
  })
  const { handleSubmit, formState: { isValid } } = methods

  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date)
  }

  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date)
  }

  const dateVerification = () => {
    const datesExists = startDate && endDate
    if (datesExists && startDate > endDate) {
      return false
    } else if (endDate && !startDate) {
      return false
    }
    return true
  }

  const onSubmit = (data: BookFormType) => {
    if (!dateVerification()) {
      Alert.alert("Datas inválidas", "A data de término deve ser maior que a data de início")
    }

    const newBook: Omit<BookType, "id" | "addedIn"> = {
      title: data.title,
      author: data.author ?? '',
      description: data.description ?? '',
      category: data.category ?? '',
      rating: data.rating ?? null,
      status: selectedStatus,
      startDate: startDate ? startDate.toISOString() : null,
      endDate: endDate ? endDate.toISOString() : null,
    }

    console.log(newBook)
  }

  return {
    selectedStatus,
    setSelectedStatus,
    label,
    setLabel,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    methods,
    handleSubmit,
    isValid,
    onSubmit,
    handleStartDateChange,
    handleEndDateChange,
  }
}