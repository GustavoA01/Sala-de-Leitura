import { FormCardContainer } from "@/components/ui/FormCardContainer"
import { Button, Text } from "react-native-paper"
import { DatePicker } from "@/components/ui/DatePicker"

type InputDatesProps = {
  startDate: Date | undefined
  endDate: Date | undefined
  handleStartDateChange: (date: Date | undefined) => void
  handleEndDateChange: (date: Date | undefined) => void
}

export const InputDates = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}: InputDatesProps) => {
  return (
    <FormCardContainer iconName="calendar-range-outline" title="Período de Leitura">
      <DatePicker
        date={startDate}
        handleDateChange={handleStartDateChange}
        title="Data de Início"
      />
      <DatePicker
        date={endDate}
        handleDateChange={handleEndDateChange}
        title="Data de Término"
      />
      {startDate || endDate ? (
        <Button
          onPress={() => {
            handleStartDateChange(undefined)
            handleEndDateChange(undefined)
          }}
        >
          <Text>Limpar</Text>
        </Button>
      ) : null}
    </FormCardContainer>
  )
}
