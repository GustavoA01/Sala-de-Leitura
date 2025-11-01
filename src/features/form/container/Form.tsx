import { KeyboardAvoidingView, Platform } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { InputTitleAuthor } from "../components/InputTitleAuthor"
import { InputCategoryStatus } from "../components/InputCategoryStatus"
import { InputDates } from "../components/InputDates"
import { RatingDescription } from "../components/RatingDescrption"

type FormProps = {
  selectedStatus: number
  setSelectedStatus: (status: number) => void
  label: string
  setLabel: (label: string) => void
  startDate: Date | undefined
  endDate: Date | undefined
  handleStartDateChange: (date: Date | undefined) => void
  handleEndDateChange: (date: Date | undefined) => void
}

export const Form = ({
  selectedStatus,
  setSelectedStatus,
  label,
  setLabel,
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}: FormProps) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={120}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={{ marginBottom: 16 }}>
        <InputTitleAuthor />
        <InputCategoryStatus
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          label={label}
          setLabel={setLabel}
        />
        <InputDates
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
        />
        <RatingDescription />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
