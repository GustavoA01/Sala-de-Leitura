import { Button } from "react-native-paper"
import RBSheet from "react-native-raw-bottom-sheet"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { format } from "date-fns"
import { useRef } from "react"
import { datePickerStyles } from "./styles"

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
}
LocaleConfig.defaultLocale = "pt-br"

type DatePickerProps = {
  date: Date | undefined
  handleDateChange: (date: Date) => void
  title: string
}

export const DatePicker = ({
  date,
  handleDateChange,
  title,
}: DatePickerProps) => {
  const refRBSheet = useRef<any>(null)
  
  return (
    <>
      <Button onPress={() => refRBSheet.current?.open()}>
        {date ? format(date, "dd/MM/yyyy") : title}
      </Button>

      <RBSheet
        ref={refRBSheet}
        height={400}
        customStyles={{
          container: { backgroundColor: "#1E1E1E"},
          draggableIcon: { backgroundColor: "#666" },
        }}
      >
        <Calendar
          onDayPress={(day) => {
            handleDateChange(new Date(day.dateString))
            refRBSheet.current?.close()
          }}
          theme={datePickerStyles}
        />
      </RBSheet>
    </>
  )
}
