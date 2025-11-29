import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookFormSchema, BookFormType } from "@/data/schemas"
import { statusLabel } from "@/data/constants"
import { Alert } from "react-native"
import { BookType } from "@/data/types"
import { Timestamp } from "firebase/firestore"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBook } from "@/services/books"
import { router } from "expo-router"

export const useBookForm = () => {
  const queryClient = useQueryClient()
  const [selectedStatus, setSelectedStatus] = useState<number>(0)
  const [label, setLabel] = useState<string>(statusLabel[selectedStatus].label)
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const methods = useForm<BookFormType>({
    // @ts-ignore
    resolver: zodResolver(bookFormSchema),
  })
  const { handleSubmit, reset, formState: { isValid } } = methods

  const { mutateAsync: createBookFn, isPending: isLoading } = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      Alert.alert("Livro adicionado com sucesso")
      queryClient.invalidateQueries({ queryKey: ["books"] })
      router.back()
    },
    onError: () => {
      Alert.alert("Erro ao adicionar livro")
    }
  })

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

  const onSubmit = async (data: BookFormType) => {
    if (!dateVerification()) {
      Alert.alert("Datas inválidas", "A data de término deve ser maior que a data de início")
      return
    }

    const newBook: Omit<BookType, "id" | "addedIn" | "userId"> = {
      title: data.title,
      author: data.author ?? '',
      description: data.description ?? '',
      category: data.category ?? '',
      rating: data.rating ?? null,
      status: selectedStatus,
      startDate: startDate ? Timestamp.fromDate(startDate) : null,
      endDate: endDate ? Timestamp.fromDate(endDate) : null,
    }

    await createBookFn(newBook)
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
    reset,
    isValid,
    onSubmit,
    handleStartDateChange,
    handleEndDateChange,
    isLoading,
  }
}